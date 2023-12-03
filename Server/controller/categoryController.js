import categoryModel from "../model/categoryModel.js";

const createCategory = async function (req, res) {
  try {
    const data = req.body;
    const { CategoryName } = data;

    console.log(data);
    if (!CategoryName)
      return res.send({ success: false, message: "fill all data" });
    const existingCategory = await categoryModel.findOne({ CategoryName });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exisits",
      });
    }
    const category = await categoryModel({
      CategoryName,
    }).save();
    res.status(201).send({
      success: true,
      message: "category created sucessfully",
      data: category,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Create course", error });
  }
};

const getCategory = async function (req, res) {
  try {
    const getData = await categoryModel.find();
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

const getCategorybyId = async function (req, res) {
  try {
    
    const { id } = req.params;
    const getdata = await categoryModel.findById({ _id: id });
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

const getSearchbySinglefield = async function (req, res) {
  try {
    const { key } = req.params;
    console.log(key);
    const getdata = await courseModel.find({
      $or: [
        { CourseName: { $regex: key, $options: "i" } },
        { CourseDuration: { $regex: key, $options: "i" } },
        { CourseDetails: { $regex: key, $options: "i" } },
        { Description: { $regex: key, $options: "i" } },
        { CourseAmmount: { $eq: Number(key) ? +key : 0 } },
      ],
    });
    res
      .status(201)
      .send({ success: true, message: "get single field", data: getdata });
    console.log(getdata);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

const updateCategory = async function (req, res) {
  const { id } = req.params;
  try {
    const updatedDetails = await categoryModel.findOneAndUpdate(
      { _id: id },
      {
        CategoryName: req.body.CategoryName,
      },
      { new: true, upsert: true }
    );

    res.status(200).send({
      success: true,
      message: "Category is updated",
      data: updatedDetails,
    });
    console.log(updatedDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, msg: err.message });
  }
};

const deleteCategory = async function (req, res) {
  try {
    const { id } = req.params;

    const deleteuser = await categoryModel.findByIdAndDelete({ _id: id });
    console.log(deleteuser);

    res.status(200).send({
      success: true,
      message: " delete successfully data",
      data: deleteuser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in Delete", error });
  }
};

export default {
  createCategory,
  getCategory,
  getCategorybyId,
  updateCategory,
  deleteCategory,

  getSearchbySinglefield,
};
