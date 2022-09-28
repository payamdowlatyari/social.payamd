import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";

const router = express.Router();

export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const signup = async (req, res) => {

    const { email, password, firstname, lastname } = req.body;

    if (!email || !password) {
        return res.status(422).send({ message: 'You must provide both email and password.' });  // 422 refers to unprocessable entity
      }

    // See if a user with given email exists
    User.findOne({ email: email }, async (err, existingUser) => {
  
      if (err) {
        return next(err);
      }
  
      // If a user with email does exist, return an error
      if (existingUser) {
        return res.status(422).send({ message: 'This email is in use.' });  // 422 refers to unprocessable entity
      }

      //generate new password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
  
        const newUser = new User({ email, hashedPassword, firstname, lastname });

        try {
            await newUser.save();
            res.status(201).json(newUser);
        } 
        catch (error) {
            res.status(409).json({ message: error.message });
        }

    });
}

// log in
export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
  
      // validate
      if (!email || !password)
            return res
            .status(400)
            .json({ errorMessage: "Please enter all required fields." });
  
      const existingUser = await User.findOne({ email });

      if (!existingUser)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
 
      const passwordCorrect = await bcrypt.compare( password, existingUser.password);

      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
  
      // sign the token
      const token = jwt.sign({user: existingUser._id,},process.env.JWT_SECRET);
  
      // send the token in a HTTP-only cookie
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none",}).send();

    } catch (err) {
            console.error(err);
            res.status(500).send();
    }
}
  
// logout
export const logout = (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0), secure: true, sameSite: "none",}).send();
}
  
// loggedIn
export const loggedIn = (req, res) => {
    try {
      const token = req.cookies.token;

      if (!token) return res.json(false);
            jwt.verify(token, process.env.JWT_SECRET);
  
            res.send(true);

    } catch (err) {
            res.json(false);
    }
}
  
export default router;