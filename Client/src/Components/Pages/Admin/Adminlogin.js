
import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import "../../../styles/styleSignup.css"



    const Adminlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if(auth){
        navigate("/admin")
      }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const res = await axios.post("http://localhost:8000/login",{
        
    email,
    password,
    
    });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            alert("login sucessfully")
             navigate("/dashboard");
             localStorage.setItem("user",JSON.stringify(res))
           
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
      <h4 className="title">ADMIN LOGIN FORM</h4>
     
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
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          
          </div>

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgotpassword");
              }}
            >
              Forgot Password 
            </button>
           
          </div>
         
    </form>
  </div>
  )
}

export default Adminlogin
