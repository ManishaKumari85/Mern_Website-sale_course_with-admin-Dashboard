import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/app.css";
import "../src/styles/css/adminlte.min.css";
 import "../src/styles/appp.css";
//import "../src/styles/styles.pure.css";
// import "../src/styles/custom.css";





import { AuthProvider } from "./Context/userContext";
import { CartProvider } from "./Context/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);
