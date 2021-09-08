const jwt=require("jsonwebtoken");

require("dotenv").config()
const generateAuthToken= async (data)=>{
    const Token= jwt.sign(data,"sunlight")
    return Token;
    
}
const accessToken=async(req,res,next)=>{
    const token=await jwt.verify(req.cookies.suraj,"sunlight")
    next();
}
module.exports={generateAuthToken,accessToken}