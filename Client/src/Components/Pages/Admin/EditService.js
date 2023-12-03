
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../../../styles/styleSignup.css";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ContactsTwoToneIcon from "@mui/icons-material/ContactsTwoTone";
import SentimentSatisfiedAltTwoToneIcon from "@mui/icons-material/SentimentSatisfiedAltTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import TuneIcon from "@mui/icons-material/Tune";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import MessageIcon from "@mui/icons-material/Message";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ParkIcon from "@mui/icons-material/Park";
import SailingIcon from "@mui/icons-material/Sailing";

const EditService = () => {
  const params = useParams();
  const [id, setId] = useState("");
  const [ServiceName, setServiceName] = useState("");
  const [Description, setDescription] = useState("");
  const [Sub, setSub] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [Price, setPrice] = useState("");
  const [videoLink, setvideoLink] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/getServicebyId/${params.id}`
      );
      setId(params.id);
      setImage(data.data.image);
      setServiceName(data.data.ServiceName);
      setSub(data.data.Sub);
      setSelectedSubcategory(data.data.selectedSubcategory);
      setPrice(data.data.Price);
      setDescription(data.data.Description);
      setvideoLink(data.data.videoLink)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    loaddata();
  }, []);



  const loaddata = async () => {
    const result = await axios.get("http://localhost:8000/getSubCategory");
    setSub(result.data.data);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("ServiceName", ServiceName);
      formData.append("Description", Description);
      formData.append("Sub", selectedSubcategory);
      formData.append("Price", Price);
      formData.append("videoLink", videoLink);
      formData.append("image", image);


      const { data } = await axios.put(
        `http://localhost:8000/updateServiceId/${id}`,
        formData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Service updated Successfully");
        navigate("/viewService");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const auth = localStorage.getItem("user");
  const Logout = () => {
    localStorage.clear();
    navigate("/admin");
  };

  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="csrf-token"
          content="VfTvliXxAlCqiBOuqGw6wxRxZnF3IlJrcZ75csA7"
        />
        <meta name="robots" content="noindex, nofollow" />
        <title>Admin Dashboard</title>

        <div className="wrapper">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n     .user-panel img {\n       width: 40px !important;\n       height: 40px !important;\n     }\n     .sidebar-dark-primary {\n        background: #09121b !important;\n     }\n   ",
            }}
          />
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/admin/dashboard" className="brand-link">
              <img
                src="image/logo.png"
                alt="Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8", height: "0%", width: "30%" }}
              />
              <span className="brand-text font-weight-light">DIGI WORLD</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="https://wbcoding.com/admin/image/hacker.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <a href="#" className="d-block">
                    Admin
                  </a>
                </div>
              </div>

              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <Menu>
                    <MenuItem
                      component={<Link to="/dashboard" className="link" />}
                      icon={<DashboardIcon />}
                    >
                      Dashboard
                    </MenuItem>
                    <SubMenu label="Settings" icon={<SettingsIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All Setting{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Order" icon={<ShoppingCartTwoToneIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All Order{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Contact Us" icon={<ContactsTwoToneIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All Contact{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu
                      label="User"
                      icon={<SentimentSatisfiedAltTwoToneIcon />}
                    >
                      <MenuItem
                        component={<Link to="/user" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All User{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu
                      label="Why Choose Us"
                      icon={<ContactSupportTwoToneIcon />}
                    >
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        All Why Choose Us{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="FAQ" icon={<SettingsIcon />}>
                      <MenuItem component={<Link to="#" />} icon={<TuneIcon />}>
                        {" "}
                        All FAQ{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Course" icon={<FolderCopyIcon />}>
                      <MenuItem
                        component={<Link to="/addCategory" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All Course Type{" "}
                      </MenuItem>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All Courses Contents{" "}
                      </MenuItem>
                      <MenuItem
                        component={<Link to="/adddata" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        {" "}
                        All Assign Course{" "}
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Testimonial" icon={<MessageIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        All Testimonial
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Offers" icon={<LocalOfferIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        All Offers
                      </MenuItem>
                    </SubMenu>

                    <SubMenu label="Banner" icon={<ParkIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        All Banner
                      </MenuItem>
                    </SubMenu>

                    <SubMenu label="Placement Company" icon={<SailingIcon />}>
                      <MenuItem
                        component={<Link to="#" />}
                        icon={<CircleTwoToneIcon />}
                      >
                        All Placement Company
                      </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<LogoutIcon />}>
                      {" "}
                      {auth ? (
                        <Link onClick={Logout} to="/admin">
                          Logout
                        </Link>
                      ) : (
                        <Link to="/admin">Login</Link>
                      )}{" "}
                    </MenuItem>
                  </Menu>
                </ul>
              </nav>
            </div>
            {/* /.sidebar */}
          </aside>
          ;{/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            <section className="content  h-100">
              <div className="container-fluid  h-100">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-secondary">
                      <div className="card-header">
                        <h3 className="card-title">Edit Service</h3>
                      </div>
                      <form enctype="multipart/form-data" method="post">
                      <div className="card-body">
                          <div className="form-group">
                            <label htmlFor>Service Image</label>
                            <input
                              type="file"
                              placeholder="Select your Image"
                              className="form-control"
                              onChange={(e) => setImage(e.target.files[0])}
                              required
                            />
                             <img
                              style={{ width: 60, height: 60 }}
                              src={`http://localhost:8000/${image}`}
                            />
                          </div>
                          <div className="form-group">
                            <label>Service Name</label>
                            <input
                              type="text"
                              value={ServiceName}
                              placeholder="write a Service Name"
                              className="form-control"
                              onChange={(e) => {
                                setServiceName(e.target.value);
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>videoLink</label>
                            <input
                              type="text"
                              value={videoLink}
                              placeholder="write a Course Duration"
                              className="form-control"
                              onChange={(e) => {
                                setvideoLink(e.target.value);
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Price</label>
                            <input
                              type="Number"
                              value={Price}
                              placeholder="write a Course Ammount"
                              className="form-control"
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="subCategorySelect">
                              Subcategory
                            </label>
                            <br />
                            <select
                              className="form-group"
                              style={{
                                text: "black",
                                width: "100%",
                                padding: "8px",
                                border: "1px solid LightGray",
                                outline: "none",
                              }}
                              value={selectedSubcategory} 
                              onChange={handleSubcategoryChange}
                            >
                              <option
                                className="form-group"
                               
                              >
                                Select a subcategory
                              </option>

                              {Sub.map((data) => (
                                <option
                                  className="form-group"
                                 
                                  key={data._id}
                                  value={data._id}
                                >
                                  {data.SubCategoryName}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              type="text"
                              value={Description}
                              placeholder="write a Description"
                              className="form-control"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                            type="Submit"
                            className="btn btn-success"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* /.content */}
          </div>
          <footer
            className="main-footer"
            style={{
              backgroundColor: "#12273d",
              color: "white",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <strong>Copyright © 2023</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block"></div>
          </footer>
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
        </div>
      </div>
    </>
  );
};

export default EditService;
