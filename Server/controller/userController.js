import userModel from "../model/userModel.js";
import { comparePassword, hashpassword } from "../helpers/authHelpers.js";
import Jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "63fda0af20c409",
    pass: "f778c82b192f43",
  },
});

const createUser = async function (req, res) {
  try {
    let data = req.body;
    const { name, email, password, phoneNO, parentId } = data;
    console.log(data);
    if (!name) return res.send({ message: "Name is required" });
    if (!email) return res.send({ message: "Email is required" });
    if (!password) return res.send({ message: "Password is required" });
    if (!phoneNO) return res.send({ message: "PhoneNO is required" });

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "Already Register please login" });
    }
    const hashedpassword = await hashpassword(password);
    const user = await new userModel({
      name,
      email,
      phoneNO,
      parentId,
      password: hashedpassword,
    }).save();
    console.log(user);

    res
      .status(201)
      .send({ success: true, message: "user Register successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Registeration", error });
  }
};

// get all child of a parent

const getChild = async function (req, res) {
  try {
    const id = req.params.id;
    const data = await userModel.find({ parentId: id });
    res.status(201).send({ status: true, child: data });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};

// get parent by child_id

const getparent = async function (req, res) {
  try {
    const details = req.params.id;
    const data = await userModel.findOne({ _id: details });
    const parentdetails = await userModel.findOne({ _id: data.parentId });
    res.status(201).send({ status: true, parent: parentdetails });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};

//  get both parent and child details by id

const getall = async function (req, res) {
  try {
    const details = req.params.id;
    const data = await userModel.findOne({ _id: details });
    const parentdetails = await userModel.findOne({ _id: data.parentId });
    const datas = await userModel.find({ parentId: details });

    res.status(201).send({ status: true, parent: parentdetails, child: datas });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};

//  LOGIN   //

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(404)
        .send({ success: false, message: "Invalid email or password" });
    const user = await userModel.findOne({ email });
    if (!user)
      return res
        .status(404)
        .send({ success: false, message: "email is not registerd" });

    const match = await comparePassword(password, user.password);
    if (!match)
      return res
        .status(400)
        .send({ success: false, message: "Invalid password" });

    //token
    const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        _id: user._id ,
        email: user.email,
        phone: user.phoneNO,
        parentId:user.parentId,
        isAdmin: user.isAdmin,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in login", error });
  }
};

const forgotPasswordController = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(401).send({ status: false, message: "Enter Your Email" });
  }
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const OTP = Math.floor(100000 + Math.random() * 900000);
      const existmail = await userModel.findOne({ email: email });
      console.log(OTP);
      if (existmail) {
        const updateData = await userModel.findByIdAndUpdate(
          { _id: existmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );
        await updateData.save();

        const mailOptions = {
          from: "63fda0af20c409", // Replace with your own Gmail address
          to: "manishakumari29101994@gmail.com", // Replace with the recipient's email address
          subject: "Password reset request",
          text: `OTP:- ${OTP}`,
        };
        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        res.send({
          success: true,
          message: "Password reset Email Sent...Please Check Your Email",
          OTP: OTP,
        });
      } else {
        const saveotp = new userModel({ email, otp: OTP });
        await saveotp.save();
      }
    } else {
      res
        .status(400)
        .send({ status: false, message: "This user not exist in our db" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "error" });
  }
};

const ResetPasssword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const validOTP = await userModel.findOne({ email, otp });
    if (!validOTP) {
      res.send("Invalid code passed . Check your mail.");
    }
    if (newPassword.length < 6) {
      res.send("password is too short!");
    }
    const hashedpassword = await hashpassword(newPassword);
    await userModel.updateOne({ email }, { password: hashedpassword });
    res
      .status(200)
      .send({ status: true, message: "password update sucessfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "error" });
  }
};



export default {
  createUser,
  getChild,
  getparent,
  getall,
  
  loginController,
  ResetPasssword,
  forgotPasswordController,
};
