
import React, {useState} from "react";
import axios from "axios";
import { useNavigate,NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../styles/styleSignup.css"


const Register = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNO, setPhoneNO] = useState("");
  const [parentId, setparentId] = useState("");
  const navigate = useNavigate();

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:8000/register",{
name,
email,
password,
phoneNO,
parentId,
});
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        alert("Registration Successfully done 😃!")
         navigate("/login");
       
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
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input 
              type="text"
              value={phoneNO}
              onChange={(e) => setPhoneNO(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={parentId}
              onChange={(e) => setparentId(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your ReffrealCode"
              required
            />
          </div>
         
          <button type="submit" className="submit">
            REGISTER
            </button>
        </form>
      </div>
      
  );
};

export default Register;