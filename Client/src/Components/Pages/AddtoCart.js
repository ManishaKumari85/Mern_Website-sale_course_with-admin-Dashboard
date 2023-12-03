import React from "react";
import { useCart } from "../../Context/Cart";
import { useAuth } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const AddtoCart = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.CourseAmmount;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  // remove Cart Item
  const removeItem = (dataID) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === dataID);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <div className="container pt-5  " style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-9">
            {cart?.map((data) => (
              <div className="row  card flex-row mb-2 p-3">
                <div className="col-md-4">
                  <img
                    style={{ width: 160, height: 160 }}
                    src={`http://localhost:8000/${data.image}`}
                  />
                </div>
                <div className="col-md-8">
                  <p> {data.CourseName}</p>
                  <p> Price :{data.CourseAmmount}</p>
                  <p>{data.Description.substring(0, 30)}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(data._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-3 text-center ">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center  p-2 mb-1 mt-2">
                  {`Hello${auth?.token && auth?.user?.name}`}
                </h1>
                <h4 className="text-center">
                  {cart?.length > 1
                    ? `You Have ${cart.length} item in your cart ${
                        auth?.token ? "" : "Please login to checkout"
                      }`
                    : "Your cart is Empty"}
                </h4>
                <div className="row  card flex-row  mb-2 p-3" style={{marginLeft:"25px"}}>
                  

                  <h4>Total Amount : {totalPrice()}</h4>
                  
                  
                </div>
                <div className="btn btn-warning">Place Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddtoCart;
