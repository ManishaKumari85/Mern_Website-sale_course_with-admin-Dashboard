import userModel from "../model/userModel.js";
import multer from "multer";
import path from "path";
import Razorpay from "razorpay"
import fs from "fs"






// images controller

const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
   
    cb(null,"images");
  },
  filename: function (req, file, cb) {
   
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ 
  storage: storage,
  limits:{fileSize:'1000000'},
  fileFilter:(req,file,cb)=>{
      const fileTypes = /jpeg |jpg |png|gif/
      const mimeType = fileTypes.test(file.mimetype)
      const extname =fileTypes.test(path.extname(file.originalname))
      if(mimeType && extname){
          return cb(null,true)
      }
      cb("give proper file format to uploads")
  }
}).single("image") 
//   multiple imges use = .array("image" ,3)


const getuser = async (req,res)=>{
    try{
      const data = await userModel.find()
      res.status(201).send({success:true,message:"get all user",data})
      console.log(data)
    }catch(error){
      res.status(500).send({success:false,message:error})
    }
   
  }
  const getuserId = async (req,res)=>{
    try{
      const {id} = req.params;
      const data = await userModel.findById({_id:id})
      res.status(201).send({success:true,message:"get user by id",data})
      console.log(data)
    }catch(error){
      res.status(500).send({success:false,message:"error"})
    }
  }
  
  const updateUser = async (req,res)=>{
      const{id} = req.params;
     
      try{
      const data = await userModel.findByIdAndUpdate(
        {_id:id},{ $set:{ name:req.body.name,phoneNO:req.body.phoneNO,email:req.body.email} },
     {new:true ,upsert:true})
      res.status(201).send({success:true,message:"user update sucessfully",data})
     console.log(data)
    }catch(error){
      res.status(500).send({success:false,message:"error"})
    }
  }
  const getSearch  = async function (req,res){
    try{
      const { key } = req.params;
      console.log(key)
      const getdata = await userModel.find(
        { Name: { $regex: 'key', $options: 'i' }}
        // {
        //   "$or":[
        //    {"name":{ $regex: key, $options: "i" } },
        //    {"parentId":{ $regex: key, $options: "i" } },
        //    {"email":{ $regex: key, $options: "i" } },
        //    {"phoneNO":{ $eq: Number(key) ? +key : 0 } },
        //   ]
        // }
      );
   res.status(201).send({status:true,message:"get single field",data:getdata})
   console.log(getdata)
    }catch(error){
      console.log(error);
      res.status(500)
  .send({success: false,message:error})
    }
  }


const payment = (req,res)=>{
  let instance =  new Razorpay({
    key_id: 'rzp_test_H9XdeUK8AnHeF4',
    key_secret: 'jT8esrJJxDfR47aAO6e1z3dO'
  });
  
  var options = {
    amount : req.body.amount*100,
   currency:"INR",
  };
  instance.paymentController.create(options,function(err,order){
    if(err){
      return res.send({code:500,message:"server Err"})
    }
    return res.send({code:200, message:"order created", data:order})
  })
  }


  export default {
  getuserId,
  getuser,
  updateUser,
  upload,
  getSearch,
  payment
  }