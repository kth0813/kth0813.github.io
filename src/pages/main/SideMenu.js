import React from "react";
import { useLocation } from "react-router";

export default function SideMenu() {
  const location = useLocation();
  return (
    <div
      style={{
        width: "calc(15vw - 10px)",
        minHeight: "80vh",
        margin: "10px 10px 10px 5vw",
        backgroundColor: "white",
      }}
    >
      <h3 style={{ textAlign: "center" }}>카테고리</h3>
      <div
        style={{
          borderBottom: "1px solid #ccc",
          width: "90%",
          margin: "0 auto",
        }}
      />
      <ul className="widget_content">
        <li className="active">
          <a href="#">전체</a>
          <span className="count">(10)</span>
        </li>
        <li>
          <a href="#">AAA</a>
          <span className="count">(7)</span>
        </li>
        <li>
          <a href="#">BBB</a>
          <span className="count">(2)</span>
        </li>
        <li>
          <a href="#">미분류</a>
          <span className="count">(1)</span>
        </li>
      </ul>
    </div>
  );
}
