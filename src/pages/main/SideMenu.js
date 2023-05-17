import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { category, post } from "../contents/data";
import { changePath } from "../../utils/utils";
export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  let search = new URLSearchParams(location.search);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const counts = post.reduce((accumulator, item) => {
      const { category } = item;
      if (category) {
        return { ...accumulator, [category]: (accumulator[category] || 0) + 1 };
      }
      return accumulator;
    }, {});
    setCategoryCounts(counts);
  }, []);

  const onMove = (category) => (e) => {
    e.preventDefault();
    navigate("/list?category=" + category);
  };
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
        <li
          className={search.get("category") == "all" ? "active" : ""}
          onClick={onMove("all")}
        >
          <a>전체</a>
          <span className="count">({post.length})</span>
        </li>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li
            className={search.get("category") == category ? "active" : ""}
            key={category}
            onClick={onMove(category)}
          >
            <a>{category}</a>
            <span className="count">({count})</span>
          </li>
        ))}
        <li
          className={search.get("category") == "none" ? "active" : ""}
          onClick={onMove("none")}
        >
          <a>미분류</a>
          <span className="count">
            ({post.filter((item) => item.category == "").length})
          </span>
        </li>
      </ul>
    </div>
  );
}
