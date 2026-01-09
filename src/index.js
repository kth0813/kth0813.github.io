import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css?20260109";
import "./img/fontawesome-free-6.1.1-web/css/all.css";
import App from "./App";
import AuthProvider from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
