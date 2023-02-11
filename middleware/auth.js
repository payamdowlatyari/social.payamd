import jwt from "jsonwebtoken";

const secret = "theresnosecrect";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;

    if (token) {      
      decodedData = jwt.verify(token, secret);
      console.log(decodedData.id);
      req.userId = decodedData?.id;
      console.log(req.userId);
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;