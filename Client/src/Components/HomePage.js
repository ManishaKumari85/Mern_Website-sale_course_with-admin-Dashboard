import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../Context/Cart";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useCart();
  useEffect(() => {
    loaddata();
  }, []);
  const loaddata = async () => {
    const result = await axios.get("http://localhost:8000/admin/getdata");
    console.log(result);
    setUsers(result.data.data);
  };

  return (
    <>
      <Navbar />
      <div class="bg-[#12273d]">
        {/* <div className="header grediant-bg"> */}
          <div
            className="h-[850px] sm:h-[850px] md:h-[1080px] lg:h-[100vh]"
            style={{
              backgroundImage:
                'url("https://www.erasoftech.com/assets_home/images/bg/07.png")',
            }}
          >
            <header className="max-w-[1368px] mx-auto">
              <div className="w-[95%] m-auto">
                <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row  pt-[130px] sm:pt-[130px] md:pt-[150px] lg:pt-[150px]">
                  <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[50%] mx-auto">
                    <h2 className="text-[30px] sm:text-[30px] md:text-[30px] lg:text-[72px] font-semibold text-white leading-[1.3] custom-family mt-[50px]">
                      DIGI World training course
                    </h2>
                    <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[20px] text-white leading-[1.2] custom-family mt-5 text-justify">
                      The Complete Android Developer Course: Beginner To
                      Advanced. In this complete course students will learn how
                      to build and develop Android Applications for smartphone
                    </p>
                    <div className="mt-10 w-25 h-4">
                      <a
                        href="/Signup"
                        className="custom-bg text-white py-[13px] px-[30px] rounded-[10px] justify-between table signup-login"
                      >
                        Join Now
                      </a>
                    </div>
                  </div>
                  {/* <AddCategory/> */}
                  <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] text-justify">
                    <div className=" ml-5 sm:ml-0 md:ml-0 lg:ml-5">
                      <div className="item mt-5 ml-5">
                        <img
                          src="image/banner.png"
                          alt="slider-course"
                          className="w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[400px] rounded-lg"
                        />
                      </div>
                      {/* <div className="item">
                        <img
                          src=""
                          alt="slider-course"
                          className="w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[400px] rounded-lg"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <svg
            className="wave-animation"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z"
              />
            </defs>
            <g className="wave-bg">
              <use
                xlinkHref="#gentle-wave"
                x={50}
                y={0}
                fill="rgba(237,251,233,0.2)"
              />
              <use xlinkHref="#gentle-wave" x={50} y={3} fill="#657485" />
              <use xlinkHref="#gentle-wave" x={50} y={6} fill="#12273d" />
            </g>
          </svg>
        {/* </div> */}

        {/* start */}
        <p className="text-[30px] custom-font font-semibold mt-8  mb-10 block text-white text-center">
          Our Trading Courses
        </p>
        <div className="container mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {users?.map((data) => (
            <div className="grediant-bg catagory-item rounded pb-[10px]">
              <div className="border-b">
                <div className="px-4 pt-4 pb-2">
                  <div className=" flex justify-center mb-4">
                    <img
                      style={{ width: 400, height: 160 }}
                      src={`http://localhost:8000/${data.image}`}
                    />
                    {console.log(`http://localhost:8000/${data.image}`)}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="details text-[13px] text-[#444444] font-medium text-white">
                  {data.CourseName}
                </div>
                <div className="details text-[13px] text-[#444444] font-medium text-white">
                  {data.Description}
                </div>
                <div>
                  <div className="flex justify-between text-[13px] mt-2 text-white">
                    <span>Amount</span>
                    <span>
                      {data.CourseAmmount}{" "}
                      <span className="bg-blue-300 border-[0.5px] border-blue-400 p-[1px] rounded font-medium text-[10px]"></span>
                    </span>
                  </div>
                  <div className="flex justify-between text-[13px] mt-2">
                    <span>
                      <NavLink
                        to="/Details"
                        className="btn custom-bg text-white px-3 py-1 text-[14px] rounded-sm ml-4 hover:text-[#070c1b]"
                      >
                        More Details
                      </NavLink>
                    </span>
                    <span>
                      <NavLink
                        className="btn custom-bg text-white px-3 py-1 text-[14px] rounded-sm ml-4 hover:text-[#070c1b]"
                        onClick={() => {
                          setCart([...cart, data]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, data])
                          );
                          toast.success("item added to cart");
                        }}
                      >
                        Add To Cart
                      </NavLink>

                      <span className="bg-blue-300 border-[0.5px] border-blue-400 p-[1px] text-[10px] font-medium rounded uppercase"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* end */}

        <div className="faq max-w-[1368px] mx-auto my-[100px]">
          <div className="accordion-container w-[95%] mx-auto">
            <p className="text-[30px] custom-font font-semibold mt-8  mb-10 block text-white text-center">
              Why Choose us
            </p>
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 bg-[#038AB0] rounded-[20px] shadow ml-0 sm:ml-0 md:ml-4 lg:ml-4 why-item">
                <div className=" flex justify-center items-center">
                  <div className="w-[70px] h-[70px] bg-white rounded-full flex text-[30px] justify-center items-center">
                    <i className="fas fa-graduation-cap" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="my-4 font-semibold text-white text-[18px]">
                    Modern Design
                  </p>
                  <p className="text-white text-[16px] font-normal text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus laboriosam molestias nobis sint ducimus nam et illo
                    vitae fuga cupiditate magnam consequuntur rem ut assumenda,
                    quas ratione blanditiis ea itaque. Voluptatibus quod facilis
                    vero cupiditate asperiores libero repudiandae repellendus
                    beatae?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial max-w-[1368px] mx-auto my-[70px]">
          <div className="w-[95%] mx-auto">
            <div className="mb-[30px] text-center">
              <h3 className="text-[30px] custom-font font-semibold  block text-white text-center">
                Our Student Reviews
              </h3>
            </div>
            <div className="owl-carousel client-review">
              <div className="item p-6">
                <div className="bg-[#114e6d] custom-shadow p-[20px] sm:p-[20px] md:p-20 lg:p-[60px] h-[300px] rounded-[8px] client-item">
                  <div className="ml-2">
                    <p className="text-white text-[16px] text-justify">
                      This course includes all the major topics including Social
                      Media Marketing, Facebook Marketing, Adwords, Analytics,
                      Video Marketing and a lot more.
                    </p>
                    <div className="mt-4 sm:mt-4 md:mt-10 lg:mt-10">
                      <div>
                        <img
                          src="https://wbcoding.com/admin/image/1292551017_python.jpg"
                          alt="student"
                          className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[60px] h-[50px] sm:h-[50px] md:h-[60px] lg:h-[60px] rounded-[50%]"
                        />
                      </div>
                      <h4 className="text-white font-bold text-[17px] sm:text-[17px] md:text-[20px] lg:text-[20px] mt-2">
                        Mary Phillips
                      </h4>
                      <ul className="flex mb-0 mt-2 pr-4">
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item p-6">
                <div className="bg-[#114e6d] custom-shadow p-[20px] sm:p-[20px] md:p-20 lg:p-[60px] h-[300px] rounded-[8px] client-item">
                  <div className="ml-2">
                    <p className="text-white text-[16px] text-justify">
                      This course includes all the major topics including Social
                      Media Marketing, Facebook Marketing, Adwords, Analytics,
                      Video Marketing and a lot more.
                    </p>
                    <div className="mt-4 sm:mt-4 md:mt-10 lg:mt-10">
                      <div>
                        <img
                          src="https://wbcoding.com/admin/image/889983390_python.jpg"
                          alt="student"
                          className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[60px] h-[50px] sm:h-[50px] md:h-[60px] lg:h-[60px] rounded-[50%]"
                        />
                      </div>
                      <h4 className="text-white font-bold text-[17px] sm:text-[17px] md:text-[20px] lg:text-[20px] mt-2">
                        Mary Phillips
                      </h4>
                      <ul className="flex mb-0 mt-2 pr-4">
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item p-6">
                <div className="bg-[#114e6d] custom-shadow p-[20px] sm:p-[20px] md:p-20 lg:p-[60px] h-[300px] rounded-[8px] client-item">
                  <div className="ml-2">
                    <p className="text-white text-[16px] text-justify">
                      This course includes all the major topics including Social
                      Media Marketing, Facebook Marketing, Adwords, Analytics,
                      Video Marketing and a lot more.
                    </p>
                    <div className="mt-4 sm:mt-4 md:mt-10 lg:mt-10">
                      <div>
                        <img
                          src="https://wbcoding.com/admin/image/2035147370_python.jpg"
                          alt="student"
                          className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[60px] h-[50px] sm:h-[50px] md:h-[60px] lg:h-[60px] rounded-[50%]"
                        />
                      </div>
                      <h4 className="text-white font-bold text-[17px] sm:text-[17px] md:text-[20px] lg:text-[20px] mt-2">
                        zasarigen
                      </h4>
                      <ul className="flex mb-0 mt-2 pr-4">
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                        <li>
                          <i className="fas fa-star text-yellow-500" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial max-w-[1368px] mx-auto my-[70px]">
          <div className="w-[95%] mx-auto pb-[30px]">
            <div className="mb-[40px] text-center">
              <h3 className="text-[30px] custom-font font-semibold  block text-white text-center">
                Students Get Placed in
              </h3>
            </div>
            <div className="owl-carousel student-get-job">
              <div className="item">
                <div className="bg-white p-4 rounded h-[120px]">
                  <img
                    src="https://wbcoding.com/admin/logo/2088979540_2.png"
                    alt={10}
                    className="w-[100px] h-[90px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-[1368px] mx-auto"
          style={{ paddingBottom: "100px" }}
        >
          <div className="w-[95%] mx-auto">
            <div>
              <h2 className="text-center text-[30px] custom-font font-bold block mb-10 text-white">
                Call Request Form
              </h2>
              <div className="text-center bg-red-400 py-2 mb-3 rounded  font-semibold text-[15px] error-message hidden" />
              <div className="text-center bg-green-400 py-2 mb-3 rounded  font-semibold text-[15px] success-message hidden" />
              <form
                action="https://wbcoding.com/submit-form"
                method="post"
                className="contact-form"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                />
                <div className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row">
                  <div className="w-[100%] sm:w-[100%] md:w-[25%] lg:w-[25%]">
                    <input
                      type="text"
                      className="form-control  
    block
    w-full
    px-3
    py-2
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded-[20px]
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Full Name"
                      name="name"
                    />
                    <span className="text-red-500 block error-name text-left" />
                  </div>
                  <div className=" w-[100%] sm:w-[100%] md:w-[25%] lg:w-[25%] mt-2 sm:mt-2 md:mt-0 lg:mt-0 px-0 sm:px-0 md:px-5 lg:px-5">
                    <input
                      type="text"
                      className="form-control  
  block
  w-full
  px-3
  py-2
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded-[20px]
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email"
                      name="email"
                    />
                    <span className="text-red-500 block error-email text-left" />
                  </div>
                  <div className="w-[100%] sm:w-[100%] md:w-[25%] lg:w-[25%] mt-2 sm:mt-2 md:mt-0 lg:mt-0 px-0 sm:px-0 md:px-5 lg:px-5">
                    <input
                      type="number"
                      className="form-control  
    block
    w-full
    px-3
    py-2
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded-[20px]
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Mobile"
                      name="mobile"
                    />
                    <span className="text-red-500 block error-mobile text-left" />
                  </div>
                  <div className="w-[100%] sm:w-[100%] md:w-[25%] lg:w-[25%] mt-2 sm:mt-2 md:mt-0 lg:mt-0">
                    <button
                      type="submit"
                      className="uppercase custom-bg text-white w-full rounded-[20px] text-center py-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="modal-container">
          <div id="modal" className="w-[95%] sm:w-[95%] md:w-[75%] lg:w-[55%]">
            <div className="container" id="container">
              <div className="form-container sign-up-container w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] px-8 hidden">
                <p className=" text-[32px] custom-font font-semibold my-5 ">
                  Create Account
                </p>
                <form
                  encType="multipart/form-data"
                  action="register"
                  method="post"
                  className="register"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control  
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Full Name"
                        name="name"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control  
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control  
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Mobile"
                        name="mobile"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <select
                        className="form-select 
              appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="gender"
                      >
                        <option value>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group mb-6">
                    <div className="flex items-center justify-center">
                      <div
                        className="datepicker relative form-floating  block  w-full"
                        data-mdb-toggle-button="false"
                      >
                        <input
                          type="text"
                          className="form-control block w-full  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Select Birth date"
                          data-mdb-toggle="datepicker"
                          name="birth_date"
                        />
                        <label
                          htmlFor="floatingInput"
                          className="text-gray-700"
                        >
                          Select Birth date
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Password input */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                      <input
                        type="password"
                        className="form-control  
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="password"
                        className="form-control  
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign Up
                  </button>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                  </div>
                </form>
                <form action="/auth/google" method="post">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                  />
                  <input type="hidden" name="type" defaultValue="google" />
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="https://wbcoding.com"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 text-white font-medium text-sm mb-2 uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                    style={{ backgroundColor: "#4285F4" }}
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-3.5 h-3.5 mr-2"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </form>
                <form action="/auth/google" method="post">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                  />
                  <input type="hidden" name="type" defaultValue="facebook" />
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="https://wbcoding.com"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 text-white font-medium text-sm mb-2 uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                    style={{ backgroundColor: "#3b5998" }}
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-3.5 h-3.5 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                    Continue with Facebook
                  </button>
                </form>
                <div className="block sm:block md:block lg:hidden mt-3">
                  <a
                    href="login"
                    className="ghost custom-bg px-4 py-2 text-white rounded"
                    id="signIn1"
                  >
                    Sign In
                  </a>
                </div>
              </div>
              <div className="form-container sign-in-container w-[100%] px-8 sm:w-[100%] md:w-[100%] lg:w-[50%]">
                <p className=" text-[32px] custom-font font-semibold my-5 ">
                  Sign in
                </p>
                <form
                  encType="multipart/form-data"
                  action="https://wbcoding.com/login"
                  method="post"
                  className="register"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                  />
                  {/* Email input */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-[7px]  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                  {/* Password input */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-[7px]   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign in
                  </button>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                  </div>
                </form>
                <form action="https://wbcoding.com/auth/google" method="post">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                  />
                  <input type="hidden" name="type" defaultValue="google" />
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="https://wbcoding.com"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 text-white font-medium text-sm mb-2 uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                    style={{ backgroundColor: "#4285F4" }}
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-3.5 h-3.5 mr-2"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </form>
                <form action="https://wbcoding.com/auth/google" method="post">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="06djJ72AGsEjxj1R66uhh2ZwArXGMl1gVOUkxnJk"
                  />
                  <input type="hidden" name="type" defaultValue="facebook" />
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="https://wbcoding.com"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 text-white font-medium text-sm mb-2 uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                    style={{ backgroundColor: "#3b5998" }}
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-3.5 h-3.5 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                    Continue with Facebook
                  </button>
                </form>
                <div className="mt-[50px] block sm:block md:block lg:hidden">
                  <a
                    href="#"
                    className="ghost custom-bg mt-[50px] px-4 py-2 text-white rounded"
                    id="signUp1"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="overlay-container hidden sm:hidden md:hidden lg:block">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1 className="text-[32px] custom-font font-semibold pb-10">
                      Welcome Back!
                    </h1>
                    <lottie-player
                      src="https://assets7.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                      background="transparent"
                      speed={1}
                      style={{ width: 400, height: 400 }}
                      loop
                      autoPlay
                    />
                    <a
                      href="#"
                      className="ghost custom-bg mt-[50px] px-4 py-2 text-white rounded"
                      id="signIn"
                    >
                      Sign In
                    </a>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1 className="text-[32px] custom-font font-semibold pb-10">
                      Hello, Friend!
                    </h1>
                    <lottie-player
                      src="https://assets2.lottiefiles.com/packages/lf20_mjlh3hcy.json"
                      background="transparent"
                      speed={1}
                      style={{ width: 400, height: 400 }}
                      loop
                      autoPlay
                    />
                    <a
                      href="#"
                      className="ghost custom-bg mt-[50px] px-4 py-2 text-white rounded"
                      id="signUp"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            id="close-modal"
            className="top-[10%] sm:top-[10%] md:top-[13.7%] lg:top-[13.7%] right-[3%] sm:right-[3%] md:right-[22.6%] lg:right-[22.6%]"
          ></button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
