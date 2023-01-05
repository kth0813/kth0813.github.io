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
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gridTemplateRows: "150px 600px 150px",
      }}
    >
      <div style={{ gridColumn: "span 2" }}>
        <Header />
      </div>
      <SideMenu />
      <div>
        <App />
      </div>
      <div style={{ gridColumn: "span 2" }}>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
