import React from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const AboutUs = () => {
  return (
    <>
    <Navbar/> 
       <div class="bg-[#12273d]">
        <div className="contact-section max-w-[1368px] mx-auto"style={{marginTop:120}}>
          <div className="w-[90%] m-auto">
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] mr-[20px] mb-10">
                <div className="text-white text-[16px] text-justify mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit veniam facilis voluptatem obcaecati quidem, optio
                  mollitia sint possimus illum doloremque impedit facere ex
                  officiis maiores, quisquam odio fuga cupiditate. Nesciunt
                  veniam, iusto assumenda perspiciatis amet accusantium, cumque
                  culpa nam sed deserunt voluptatem? Aperiam, ratione dolores
                  enim nemo cumque nobis eius impedit quidem culpa sunt, numquam
                  quam eum ducimus laborum? Debitis, error. Molestias,
                  cupiditate esse reiciendis necessitatibus exercitationem
                  dolore id eligendi, doloribus delectus deleniti laudantium
                  deserunt! Modi ipsum necessitatibus quia! Qui cupiditate
                  commodi omnis id pariatur illo possimus, dolor perferendis
                  eius et saepe hic iste sint maiores veritatis reprehenderit
                  consectetur fuga!
                </div>
              </div>
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] mr-[10px] text-center">
                <img src="https://wbcoding.com/image/about.png" alt="about" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1368px] mx-auto "style={{paddingBottom: '100px'}}>
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
                />{" "}
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
            </div>{" "}
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
                    defaultValue="https://wbcoding.com/about"
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
                    defaultValue="https://wbcoding.com/about"
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
                    href="#"
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
                  />{" "}
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
                    defaultValue="https://wbcoding.com/about"
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
                    defaultValue="https://wbcoding.com/about"
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
          >
          </button>
        </div>
      </div>
    <Footer/>
    </>
    
  );
};

export default AboutUs;
