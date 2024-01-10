import React from "react";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: "40vh 0",
        fontSize: "100px",
      }}
    >
      메인화면 <button onClick={() => navigate("/card")}>카드</button>
      <button onClick={() => navigate("/card2")}>카드2</button>
    </div>
  );
}
