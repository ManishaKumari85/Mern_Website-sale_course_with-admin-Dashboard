import subCategoryModel from "../model/subCategory.js";

import multer from "multer";
import path from "path";

// images controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("give proper file format to uploads");
  },
}).single("image");
//   multiple imges use = .array("image" ,3)

const subCategory = async function (req, res) {
  try {
    let data = req.body;

    let {SubCategoryName, Cat, Description } = data;

    let image = req.file.path;

    if (req.file.image && req.file.image.length > 0) {
      imagePath = image[0].path;
    }

    if (!SubCategoryName || !Cat || !Description || !image)
      return res.send({ success: false, message: "fill all data" });
      const existingCategory = await subCategoryModel.findOne({SubCategoryName});
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exisits",
      });
    }

    const user = await new subCategoryModel({
      SubCategoryName,
      Cat,
      Description,
      image,
    }).save();

    res.send({ success: true, message: "SubCategory successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Create course", error });
  }
};

const getsubCategory = async function (req, res) {
  try {
    const getData = await subCategoryModel.find().populate("Cat")

    
    res
      .status(201)
      .send({ success: true, message: "Get All Data", data: getData });
    console.log(getData);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in get data", error });
  }
};

const getsubCategorybyId = async function (req, res) {
  try {
    const { id } = req.params;
    const getdata = await subCategoryModel.findById({ _id: id }).populate('Cat');
    res
      .status(201)
      .send({ success: true, message: " Get All Data by Id", data: getdata });
    console.log(getdata);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in get data by Id", error });
  }
};

// const getSearchbySinglefield = async function (req, res) {
//   try {
//     const { key } = req.params;
//     console.log(key);
//     const getdata = await courseModel.find({
//       $or: [
//         { CourseName: { $regex: key, $options: "i" } },
//         { CourseDuration: { $regex: key, $options: "i" } },
//         { CourseDetails: { $regex: key, $options: "i" } },
//         { Description: { $regex: key, $options: "i" } },
//         { CourseAmmount: { $eq: Number(key) ? +key : 0 } },
//       ],
//     });
//     res
//       .status(201)
//       .send({ status: true, message: "get single field", data: getdata });
//     console.log(getdata);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ success: false, message: error });
//   }
// };

 const updateSubcategory = async function (req, res) {
  const { id } = req.params;
  try {
    const updatedDetails = await subCategoryModel.findOneAndUpdate(
      { _id: id },
      {
        SubCategoryName: req.body.SubCategoryName,
        Description: req.body.Description, 
        Cat:req.body.Cat, 
        image: req.file.path,
      },
      { new: true, upsert: true }
    );
    if (req.file.image && req.file.image.length > 0) {
      imagePath = image[0].path;
    }
    res.status(200).send({
      status: true,
      message: "Your Subcategory is updated",
      data: updatedDetails,
    });
    console.log(updatedDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, msg: err.message });
  }
};

const deleteSubcategory = async function (req, res) {
  try {
    const { id } = req.params;

    const deletuser = await subCategoryModel.findByIdAndDelete({ _id: id });
    console.log(deletuser);

    res.status(200).send({
      success: true,
      message: " delete successfully data",
      data: deletuser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in Delete", error });
  }
};

export default {
  subCategory,
  upload,
  getsubCategory,
  getsubCategorybyId,
  updateSubcategory,
  deleteSubcategory
//getSearchbySinglefield,


};
