import React, { useState } from "react";
import { changePath } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const onClickSearch = (e) => {
    e.preventDefault();
    if (searchTerm == "") return;
    navigate("/search?param=" + searchTerm);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#4CE3EC",
        height: "40px",
      }}
    >
      <div
        onClick={() => {
          navigate("/main");
        }}
        style={{ paddingLeft: "5vw" }}
      >
        <img src={logo} style={{ cursor: "pointer" }} />
      </div>
      <div
        style={{
          display: "flex",
          paddingRight: "5vw",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleChange}
          style={{
            border: "none",
            height: "100%",
            padding: "8px",
          }}
          onFocus={(e) => {
            e.target.select();
          }}
        />
        <i
          className="fas fa-search"
          style={{
            cursor: "pointer",
            padding: "8px",
            backgroundColor: "white",
          }}
          onClick={onClickSearch}
        />
      </div>
    </div>
  );
}
