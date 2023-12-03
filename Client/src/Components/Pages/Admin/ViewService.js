import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const ViewService = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loaddata();
  }, []);
  const loaddata = async () => {
    const result = await axios.get("http://localhost:8000/getService");
    console.log(result);
    setUsers(result.data.data);
  };

  const onDelete = async (id) => {
    if (
      window.confirm("Are u sure that you wanted to delete that user record")
    ) {
      const resp = await axios.delete(
        `http://localhost:8000/deleteService/${id}`
      );
      // console.log(resp.data.message)
      if (resp.status === 200) {
        toast.success(resp.data.message);
        loaddata();
      }
    }
  };

  const searchHandel = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8000/search/${key}`);
      result = await result.json();
      if (result) {
        setUsers(result.data);
      }
    } else {
      loaddata();
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
          {/* /.navbar */};{/* Main Sidebar Container */}
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
                        <h3 className="card-title">View Service Data</h3>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="card-header">
                            <Link to="/AddService" className="btn btn-success">
                              <i class="fa-solid fa-plus"></i>Add New Service
                            </Link>

                            <div className="card-tools">
                              <div
                                className="input-group input-group"
                                style={{ width: 250 }}
                              >
                                <input
                                  type="text"
                                  name="table_search"
                                  className="form-control float-right"
                                  placeholder="Search"
                                  onChange={searchHandel}
                                />
                                <div className="input-group-append">
                                  <button
                                    type="submit"
                                    className="btn btn-default"
                                  >
                                    <i className="fas fa-search" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body table-responsive p-0">
                            <table className="table table-hover text-nowrap table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">SL.NO</th>
                                  <th scope="col">Image</th>
                                  <th scope="col">ServiceName</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">videoLink</th>
                                  <th scope="col">SubCategory</th>
                                  <th scope="col">Description</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {users.length > 0 ? (
                                  users.map((data, index) => (
                                    <tr>
                                      <th scope="row">{index + 1}</th>
                                      <img
                                        style={{ width: 60, height: 60 }}
                                        src={`http://localhost:8000/${data.image}`}
                                      />
                                      {console.log(
                                        `http://localhost:8000/${data.image}`
                                      )}
                                      <td>{data.ServiceName}</td>
                                      <td>{data.Price}</td>
                                      <td>{data.videoLink}</td>
                                      <td>{data.Sub[0].SubCategoryName}</td>
                                      <td>{data.Description}</td>
                                      <td>
                                        <Link to={`/editServie/${data._id}`}>
                                          <button className="btn btn-primary m-2">
                                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                          </button>
                                        </Link>

                                        <button
                                          className="btn btn-danger m-2"
                                          onClick={() => onDelete(data._id)}
                                        >
                                          <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <h4> No Result Found</h4>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

export default ViewService;
