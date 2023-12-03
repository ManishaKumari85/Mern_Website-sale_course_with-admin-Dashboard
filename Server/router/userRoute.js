import express from "express"
const router = express.Router()
import userController from "../controller/userController.js"
import userProfileContoller from "../controller/userProfileContoller.js"
import { requireSignIn,Admin } from "../middleware/authMiddleware.js"



//protected User route auth

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });




router.post("/register", userController.createUser)
router.post("/login",userController.loginController)



router.post("/forgot", userController.forgotPasswordController)
router.post("/resetpassword", userController.ResetPasssword)
router.get("/parent/:id",userController.getChild)
router.get("/child/:id",userController.getparent)
router.get("/getall/:id",userController.getall)



///////////////////////////////////////////////////////////////user profile//////////////////////////////////////////////////////////////////////////////////////////////




router.get("/getuser",userProfileContoller.getuser)
router.get("/getId/:id",userProfileContoller.getuserId)
router.put("/update/:id",userProfileContoller.updateUser)
router.get("/getsearch/:key",userProfileContoller.getSearch)










export default router












