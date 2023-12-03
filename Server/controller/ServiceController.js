import ServiceModel from "../model/ServiceModel.js";
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

const Service = async function (req, res) {
  try {
    let data = req.body;

    let { ServiceName, videoLink, Description, Sub, Price } = data;

    let image = req.file.path;

    if (req.file.image && req.file.image.length > 0) {
      imagePath = image[0].path;
    }

    if (!ServiceName || !Description || !image || !Sub || !Price || !videoLink)
      return res.send({ success: false, message: "fill all data" });

    const Service = await ServiceModel.findOne({ ServiceName });
    if (Service) {
      return res.status(200).send({
        success: true,
        message: "Service Already Exisits",
      });
    }

    const user = await ServiceModel.create({
      ServiceName,
      Description,
      Sub,
      Price,
      image,
      videoLink,
    });
    res.send({ success: true, message: "Service Create successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in SubCategorycourse", error });
  }
};
const getService = async function (req, res) {
  try {
    const getData = await ServiceModel.find().populate("Sub");
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

const getservicebyId = async function (req, res) {
  try {
    const { id } = req.params;
    const getdata = await ServiceModel.findById({ _id: id }).populate("Sub");
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

const updateService = async function (req, res) {
  const { id } = req.params;
  try {
    const updatedDetails = await ServiceModel.findOneAndUpdate(
      { _id: id },
      {
        ServiceName: req.body.ServiceName,
        Description: req.body.Description,
        image: req.file.path,
        videoLink: req.body.videoLink,
        Sub:req.body.Sub,
        Price: req.body.Price,
      },
      { new: true, upsert: true }
    );
    if (req.file.image && req.file.image.length > 0) {
      imagePath = image[0].path;
    }
    res.status(200).send({
      status: true,
      message: "Your Service is updated",
      data: updatedDetails,
    });
    console.log(updatedDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, msg: err.message });
  }
};

const deleteService = async function (req, res) {
  try {
    const { id } = req.params;

    const deletuser = await ServiceModel.findByIdAndDelete({ _id: id });
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
  Service,
  upload,
  getService,
  getservicebyId,
  updateService,
  deleteService,
};
