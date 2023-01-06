import React from "react";

export default function sideMenu() {
  return (
    <div
      style={{
        width: "150px",
        minHeight: "80vh",
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            margin: "30px 0 ",
            fontSize: "20px",
          }}
        >
          메뉴1
        </div>
        <div
          style={{
            margin: "30px 0 ",
          }}
        >
          서브메뉴1
        </div>
        <div
          style={{
            margin: "30px 0 ",
          }}
        >
          서브메뉴2
        </div>
      </div>
    </div>
  );
}
