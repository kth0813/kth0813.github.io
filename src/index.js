import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./pages/main/Header";
import SideMenu from "./pages/main/SideMenu";
import Footer from "./pages/main/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "80vw",
        justifyContent: "center",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
      <Header />
      <SideMenu />
      <div style={{ flexGrow: 1, minHeight: "80vh" }}>
        <App />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
