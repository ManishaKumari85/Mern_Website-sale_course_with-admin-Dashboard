import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./Components/Auth/Register";
import HomePage from "./Components/HomePage";
import Login from "./Components/Auth/login";
import PagenotFound from "./Components/Common/Pagenotfound";
import ForgotPasssword from "./Components/Auth/ForgotPassword";
import OTP from "./Components/Auth/OTP";
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";
import AddData from "./Components/Pages/Admin/AddData";
import ViewData from "./Components/Pages/Admin/ViewData";
import EditData from "./Components/Pages/Admin/EditData";
import onDelete from "./Components/Pages/Admin/ViewData";
import AllCourse from "./Components/AllCourse";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import PrivateComponents from "./Components/PrivateComponents";
import Adminlogin from "./Components/Pages/Admin/Adminlogin";
import User from "./Components/Pages/Admin/User";
import AddCategory from "./Components/Pages/Admin/AddCategory";
import GetCategory from "./Components/Pages/Admin/GetCategory";
import EditCategory from "./Components/Pages/Admin/EditCategory";
import Setting from "./Components/Pages/User/Setting";
import AddService from "./Components/Pages/Admin/AddService";
import AddSubcategory from "./Components/Pages/Admin/AddSubcategory";
import ViewService from "./Components/Pages/Admin/ViewService";
import ViewSub from "./Components/Pages/Admin/ViewSub";
import EditService from "./Components/Pages/Admin/EditService";
import EditSubcategory from "./Components/Pages/Admin/EditSubcategory";
import AddtoCart from "./Components/Pages/AddtoCart";
import MoreDetails from "./Components/Pages/MoreDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/Signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPasssword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/AddCart" element={<AddtoCart />} />
        <Route path="/Details" element={<MoreDetails />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/allCourse" element={<AllCourse />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/admin" element={<Adminlogin />} />
        <Route element={<PrivateComponents />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/view" element={<ViewData />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/getCategory" element={<GetCategory />} />
          <Route path="/editCategory/:id" element={<EditCategory />} />
          <Route path="/addService" element={<AddService />} />
          <Route path="/addSub" element={<AddSubcategory />} />
          <Route path="/viewService" element={<ViewService />} />
          <Route path="/ViewSub" element={< ViewSub/>} />
          <Route path="/editServie/:id" element={<EditService />} />
          <Route path="/editSub/:id" element={<EditSubcategory />} />

          <Route path="/edit/:id" element={<EditData />} />
          <Route path="/user" element={<User />} />
          <Route path="/delete/id" element={<onDelete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
