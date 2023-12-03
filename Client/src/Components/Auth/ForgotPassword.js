
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../styles/styleSignup.css"


const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/forgot", {
        email
        
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/otp",{state:email});

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">FORGOT PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
       

          <button type="submit" className="btn btn-primary">
           SUBMIT
          </button>
        </form>
      </div>
   
  );
};

export default ForgotPasssword;