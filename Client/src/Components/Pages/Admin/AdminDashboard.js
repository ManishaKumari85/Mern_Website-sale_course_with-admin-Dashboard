import React from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate, Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsTwoToneIcon from "@mui/icons-material/ContactsTwoTone";
import SentimentSatisfiedAltTwoToneIcon from "@mui/icons-material/SentimentSatisfiedAltTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import TuneIcon from "@mui/icons-material/Tune";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import MessageIcon from "@mui/icons-material/Message";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ParkIcon from "@mui/icons-material/Park";
import SailingIcon from "@mui/icons-material/Sailing";

const AdminDashboard = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/admin");
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="csrf-token"
        content="VfTvliXxAlCqiBOuqGw6wxRxZnF3IlJrcZ75csA7"
      />
      <meta name="robots" content="noindex, nofollow" />
      <title>Admin Dashboard</title>
      {/* Google Font: Source Sans Pro */}

      <div className="wrapper">
        {/* /.navbar */}
        {/* Main Sidebar Container */}
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
                      component={<Link to="/view" />}
                      icon={<CircleTwoToneIcon />}
                    >
                      {" "}
                      All Course Type{" "}
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Service" icon={<MiscellaneousServicesIcon />}>
                    <MenuItem
                      component={<Link to="/getCategory" />}
                      icon={<CircleTwoToneIcon />}
                    >
                      Category
                    </MenuItem>
                    <MenuItem
                      component={<Link to="/ViewSub"/>}
                      icon={<CircleTwoToneIcon />}
                    >
                      SubCategory
                    </MenuItem>
                    <MenuItem
                      component={<Link to="/viewService" />}
                      icon={<CircleTwoToneIcon />}
                    >
                      Service
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
          {/* Content Header (Page header) */}
          <div
            className="content-header"
            style={{
              backgroundColor: "#12273d",
              color: "white",
              marginBottom: "15px",
              padding: "8px",
            }}
          >
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="card-title">
                    <strong> Dashboard </strong>
                  </h1>
                </div>
                {/* /.col */}
                {/* <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
              </ol>
            </div> */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>150</h3>
                      <p>New Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        53<sup style={{ fontSize: 20 }}>%</sup>
                      </h3>
                      <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>44</h3>
                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>65</h3>
                      <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable"></section>
                {/* /.Left col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
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
            float: "inline-end",
          }}
        >
          <strong>Copyright © 2023</strong>
          All rights reserved.
          {/* <div className="float-right d-none d-sm-inline-block"></div> */}
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
      </div>
    </div>
  );
};

export default AdminDashboard;
