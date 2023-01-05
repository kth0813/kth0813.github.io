import React from "react";

export default function Header() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div style={{ gridColumn: "span 3" }}>블로그이름</div>
        <div>
          메뉴1
          <div>서브메뉴1</div>
          <div>서브메뉴2</div>
        </div>
        <div>
          메뉴2<div>서브메뉴1</div>
          <div>서브메뉴2</div>
        </div>
        <div>
          메뉴3<div>서브메뉴1</div>
          <div>서브메뉴2</div>
        </div>
      </div>
    </div>
  );
}
