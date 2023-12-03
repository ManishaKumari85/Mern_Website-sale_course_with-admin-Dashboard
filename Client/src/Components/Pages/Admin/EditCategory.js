import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
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

  const EditCategory = () => {
  const params = useParams();
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [CategoryName, setCategoryName] = useState("");

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/getCategory/${params.id}`
      );
      setId(params.id);
      setCategoryName(data.data.CategoryName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:8000/updateCategory/${id}`,
        {
          CategoryName,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/getCategory");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input form");
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
                        component={<Link to="#" />}
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

          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            <section className="content  h-100">
              <div className="container-fluid  h-100">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-secondary">
                      <div className="card-header">
                        <h3 className="card-title"> Edit Category</h3>
                      </div>
                      <form >
                        <div className="card-body">
                        <div className="form-group">
                            <label>Category Name</label>
                            <input
                              type="text"
                              value={CategoryName}
                              placeholder="write a Category Name"
                              className="form-control"
                              onChange={(e) => {
                                setCategoryName(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                            
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

export default EditCategory;
