import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";
// import asyncHandler from 'express-async-handler';

const router = express.Router();
const secret = "theresnosecrect";
// export const getUsers = asyncHandler(async (req, res) => { 

//   try {
//       const users = await User.find();

//       console.log(users);
              
//       res.status(200).json(users);
//   } catch (error) {
//       res.status(404).json({ message: error.message });
//   }
// });


// export const getUser = asyncHandler(async (req, res) => { 

//   const id  = req.params.id;
//   console.log(id);
//   // if (id.match(/^[0-9a-fA-F]{24}$/)) {
//     try {
//         const user = await User.findById(id);      
//         res.status(200).json(user);

//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
//   // }
// });

// export async function readUserById(req, res) {
//   const id = req.params.userId;
//   try {
//     const user = await User.findById(id);   
//     res.status(200).send({
//       status: 200,
//       response: user,
//     });
//   } catch (error) {
//     res.status(500).send({
//       status: 500,
//       message: `Something wen't wrong`,
//     });
//   }
// }

export const signup = async (req, res) => {

    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    if (!email || !password) {
        return res.status(422).send({ message: 'You must provide email and password!' });  
      }

    User.findOne({ email: email }, async (err, existingUser) => {
  
      if (err) {
        return next(err);
      }
  
      if (existingUser) {
        return res.status(422).send({ message: 'This email has an account!' });  
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      const result = new User({ firstname, lastname , email, password: hashedPassword });
      const token = createAccessToken({id: result._id, email: result.email});
        
        try {
            await result.save();
            res.status(201).json({result, token});
        } 
        catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        }

    });
}

export const login = async (req, res) => {

    console.log(req.body)

    try {
        const email = req.body.email;
        const password = req.body.password;
  
      if (!email || !password)
            return res
            .status(400)
            .json({ errorMessage: "Please enter all required fields!" });
  
      const existingUser = await User.findOne({ email });

      if (!existingUser)
        return res.status(401).json({ errorMessage: "Wrong email or password!" });
 
      const passwordCorrect = await bcrypt.compare( password, existingUser.password);

      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "Wrong email or password!" });
  
      const token = createAccessToken({id: existingUser._id, email: existingUser.email})
      // const username = existingUser.firstname;

      res.status(200).json({ result: existingUser, token, });
  
    } catch (err) {
            console.error(err);
            res.status(500).send();
    }
}

  
const createAccessToken = (payload) => {
  return jwt.sign(payload,secret);
};

export default router;