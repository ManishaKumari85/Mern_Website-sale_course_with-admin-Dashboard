import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Navlinks.css";

const ServiceNavlinks = () => {
  const [Cat, setCat] = useState([]);
  const [Catid, setCatid] = useState("");
  const [Sub, setSub] = useState([]);
  const [Subid, setSubid] = useState("");
  const [Service, setService] = useState([]);
 

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const result = await axios.get("http://localhost:8000/getCategory");
    console.log(result);
    setCat(result.data.data);
  };

  

  const handelCategory = (event) => {
    const getCategoryid = event.target.value;
    setCatid(getCategoryid);

    console.log(getCategoryid)

  };

  useEffect(() => {
    
  const getSubCategory = async () => {
    const result = await axios.get(
      `http://localhost:8000/getSubCategory/${Catid}`
    );
    console.log(result);
    setSub(result.data.data);
  };
  getSubCategory();
  }, [Catid]);

  const handleSubcategory = (event) => {
    const getSubid = event.target.value;
    setSubid(getSubid);
  };

  useEffect(() => {
    getServices();
  }, [Subid]);
  const getServices = async () => {
    const result = await axios.get(`http://localhost:8000/getService/${Subid}`);
    console.log(result);
    setService(result.data.data);
  };

  

  return (
    <>
     

      <div class="dropdown">
        <button className=" font-semibold text-white">Services</button>
        <div>
          <div class="submenu">
            <ul className="menu" >
              {Cat.map((data) => (
                <li className="form-group" onMouseEnter={(e) => handelCategory(e)}
                 key={data._id} value={data._id}>
                  {data.CategoryName}
                </li>
              ))}
            </ul>
            <div>
             
              <div class="submenu">
                <ul className="menu" >
                  {Sub.map((data) => (
                    <li className="form-group" onMouseEnter={(e) => handleSubcategory(e)}  key={data._id} value={data._id}>
                      {data.SubCategoryName}
                    </li>
                  ))}
                </ul>
                <div>
                  <ul className="menu">
                    {Service.map((data) => (
                      <li className="form-group" key={data._id} value={data._id}>
                        {data.ServiceName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceNavlinks;
