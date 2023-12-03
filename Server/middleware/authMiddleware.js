import Jwt  from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const requireSignIn = async (req,res,next) =>{

try{
    const decode = Jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user = decode
   next()

}catch(error){
    console.log(error)
    res.status(500).send({sucess:false,message:"Error in jwt verify ",error})

}
}
 // admin access 
export const Admin =  async(req,res,next) =>{
    try{
        const user = await userModel.findById(req.user._id)
        if(user.isAdmin !== true){
            return res.status(401).send({
                sucess:false,
                message:"UnAuthorized Access"
            })
        }else{
            next()
        }


    }catch(error){
    console.log(error)
    res.status(500).send({sucess:false,message:"Error in Admin",error})
}
}