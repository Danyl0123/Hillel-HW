import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <div className="flex-components">
        <SideBar />
        <Main />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
