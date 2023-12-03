import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../../styles/styleSignup.css"

const OTP = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const handleSubmit = () => {
    console.log(otp, newPassword, email);
    axios
      .post("http://localhost:8000/resetpassword", {
        email: email,
        otp: otp,
        newPassword: newPassword,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == true) {
          navigate("/");
          toast.success("Password Updated.");
        } else {
          toast.error("server err / wrong OTP");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <body className="ab">
      <div>
        <div class="d-flex justify-content-center align-items-center contine">
          <div class="car py-5 px-3">
            <h5 class="m-0">Email verification</h5>
            <span class="mobile-text">
              <b>Enter the OTP we just sent on your Email</b>
            </span>
            <div
              class="d-flex flex-row mt-5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                placeholder="Enter Your email"
                className="inputs"
                type="text"
              />
            </div>
            <div
              class="d-flex flex-row mt-5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                value={otp}
                placeholder="Enter Your otp"
                className="inputs"
                type="text"
              />
            </div>
            <div
              class="d-flex flex-row mt-5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                placeholder="Enter Your  New Password"
                value={newPassword}
                onChange={(e) => {
                  setnewPassword(e.target.value);
                }}
                className="inputs"
                type="password"
              />
            </div>
            <br />
            <button onClick={handleSubmit} className="bt">
              {" "}
              CHANGE PASSWORD{" "}
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default OTP;
