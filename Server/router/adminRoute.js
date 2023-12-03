import express from "express";
const router = express.Router();
import { requireSignIn, Admin } from "../middleware/authMiddleware.js";
import courseController from "../controller/courseController.js";
import categoryController from "../controller/categoryController.js";
import subCategoryController from "../controller/subCategoryController.js";
import ServiceController from "../controller/ServiceController.js";

router.get("/admin-auth", requireSignIn, Admin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.post(
  "/createCourse",
  courseController.upload,
  courseController.createCourse
);
router.get("/admin/getdata", courseController.getCourse);
router.get("/search/:key", courseController.getSearchbySinglefield);
router.get("/getdata/:id", courseController.getCoursebyId);
router.put(
  "/updatedata/:id",
  courseController.upload,
  courseController.updateCourse
);
router.delete("/deleteData/:id", courseController.deleteCourse);

////////////////////////////////////   Create Category ///////////////////////////////////////////////////////////////////////////////

router.post("/createCategory", categoryController.createCategory);
router.get("/getCategory", categoryController.getCategory);
router.get("/search/:key", categoryController.getSearchbySinglefield);
router.get("/getCategory/:id", categoryController.getCategorybyId);
router.put("/updateCategory/:id", categoryController.updateCategory);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);


///////////////////////////////// Sub category ///////////////////////////////////////////////////////////////////////////////////////////////
router.post("/subcategory", subCategoryController.upload,subCategoryController.subCategory);
router.get("/getSubCategory",subCategoryController.getsubCategory);
router.get("/getSubCategorybyId/:id",subCategoryController.getsubCategorybyId);
router.put("/updateSubCategorybyId/:id",subCategoryController.upload,subCategoryController.updateSubcategory);
router.delete("/deleteSubCategory/:id",subCategoryController.deleteSubcategory);

//////////////////////////////////////////////////////  Service  ///////////////////////////////////////////////////////////////////////////////
router.post("/Service", ServiceController.upload,ServiceController.Service);
router.get("/getService",ServiceController.getService)
router.get("/getServicebyId/:id",ServiceController.getservicebyId);
router.put("/updateServiceId/:id",ServiceController.upload,ServiceController.updateService);
router.delete("/deleteService/:id",ServiceController.deleteService);


export default router;
