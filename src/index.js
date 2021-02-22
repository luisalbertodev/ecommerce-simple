import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "routes";
import { CartProvider } from "context/CartContext";
import { GlobalProvider } from "context/GlobalContext";
import ThemeProvider from "context/ThemeProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <GlobalProvider>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
