import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Context/userContext";
import { toast } from "react-toastify";
import ServiceNavlinks from "./ServiceNavlinks";
import { Badge } from "antd";
import "../../styles/app.css";
import { useCart } from "../../Context/Cart";

  const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();


  const handelLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <link href="https://wbcoding.com/css/app.css" rel="stylesheet" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <link
        href="https://wbcoding.com/plugin/owlcarousel/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="https://wbcoding.com/plugin/owlcarousel/owl.theme.default.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://wbcoding.com/admin/plugins/toastr/toastr.min.css"
      />
      <link href="https://wbcoding.com/css/custom.css" rel="stylesheet" />

      <nav
        className="pt-5 h-[70px] fixed top-[50px] left-0 right-0 bottom-0 z-[99]  grediant-bg"
        id="navbar"
      >
        <div className="mx-auto flex justify-between w-[100%] sm:w-[100%] md:w-[98%] lg:w-[95%]">
          <div className="w-[80%] sm:w-[80%] md:w-[80%] lg:w-[60%]">
            <div>
              <nav className="h-[110px] fixed top-0 left-0 right-0 bottom-0 z-[99]  nav-sticky">
                <div className="bg-[#12273d] mb-4">
                  <div className="max-w-[1368px] mx-auto w-[100%] sm:w-[100%] md:w-[98%] lg:w-[66%]">
                    <ul className="flex justify-end py-2">
                      <li className="text-white font-semibold text-[15px] pr-2">
                        100% Job Guarantee
                      </li>
                      <li className="text-[#0288d1] pr-2">|</li>
                      <li className="text-white font-semibold text-[15px] mr-2 sm:mr-2 md:mr-0 lg:mr-0">
                        ITSME@coding.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="max-w-[1368px] mx-auto">
                  <div className="mx-auto flex justify-between w-[100%] sm:w-[100%] md:w-[98%] lg:w-[95%]">
                    <div
                      className="text-white ml-1 sm:ml-1 md:ml-1 lg:ml-5 -mt-5"
                      style={{ width: "20%" }}
                    >
                      {/* <div className="text-white ml-1 sm:ml-1 md:ml-1 lg:ml-5 -mt-5 w-[20%] sm:w-[20%] md:w-[20%] lg:w-[40%]"> */}
                      <a href="/">
                        <img
                          src="image/logo.png"
                          alt="Logo"
                          className="w-[70px] h-[70px]"
                        />
                      </a>
                    </div>
                    <div className="" style={{ width: "80%" }}>
                      {/* <div className="w-[80%] sm:w-[80%] md:w-[80%] lg:w-[60%]"> */}
                      <div className="flex justify-end sm:justify-end md:justify-end lg:justify-between mr-5">
                        <div className="hidden sm:hidden md:hidden lg:block me-5">
                          <ul className="flex">
                            <li>
                              <NavLink
                                to="/"
                                className="mr-5 font-semibold text-white"
                              >
                                Home
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/allCourse"
                                className="mr-5 font-semibold text-white"
                              >
                                All Course
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/about"
                                className="mr-5 font-semibold text-white"
                              >
                                About Us
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/"
                                className="mr-5 font-semibold text-white "
                              >
                              
                                <ServiceNavlinks/>
                                
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/contact"
                                className="mr-5 font-semibold text-white"
                              >
                                Contact us
                              </NavLink>
                            </li>
                            <li>
                              <Badge count={cart?.length} showZero>
                                <NavLink
                                  to="/AddCart"
                                  className="mr-3 p-0 d-flex  font-semibold text-white"
                                >
                                  <i class="fa-sharp fa-solid fa-cart-shopping p-1 "></i>{" "}
                                  Cart
                                </NavLink>
                              </Badge>
                            </li>

                            <li></li>
                          </ul>
                        </div>
                        {!auth.user ? (
                          <>
                            <div className="custom-bg py-1  rounded text-white signup-login ">
                              <ul className="flex flex-row">
                                <li>
                                  <NavLink
                                    to="/login"
                                    className="mr-5 font-semibold text-white"
                                    style={{
                                      textAlign: "center",
                                      paddingLeft: "15px",
                                    }}
                                  >
                                    LogIn
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="">
                              <ul className="flex flex-row ">
                                <li className="custom-bg px-2  rounded text-white signup-login mr-5">
                                  <NavLink
                                    onClick={handelLogout}
                                    to="/"
                                    className="mr-5 font-semibold text-white"
                                  >
                                    Logout
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/setting"
                                    className="font-semibold text-white"
                                  >
                                    {auth?.user?.name}
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
