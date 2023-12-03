import React, { useState, useEffect } from "react";
import Navbar from "../../../Components/Common/Navbar";
import Footer from "../../../Components/Common/Footer";
import { useAuth } from "../../../Context/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import "../../../styles/styleSignup.css";

const Setting = () => {
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    loaddata();
  }, []);
  const loaddata = async () => {
    const result = await axios.get("http://localhost:8000/getuser");
    console.log(result);
    setUserProfile(result.data.data);
  }; 
  return (
    <>
      <Navbar />

      <div className="container-xl px-4 mt-4">
        <br />
        <br />
        <br />
        <br />
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-8">
            {/* Profile picture card*/}
            <div className="card">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt
                />
                {/* Profile picture upload button*/}
                <button className="bt">Upload new image</button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  {/* Form Group (username)*/}
                  <div className="mb-3">
                    <label className="small mb-1">Username</label>
          

             
             
             <input
                      className="form-control"
                      type="text"
                      
                      placeholder="Enter your username"
                    />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">email</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your Email"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Phone Number</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your Phone Number"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1">Referal Code</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your Referal Code"
                      />
                    </div>
                  </div>

                  {/* Save changes button*/}
                  <button className="bt">Save Change</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Setting;
