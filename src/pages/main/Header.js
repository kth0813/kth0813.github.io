import React, { useState } from "react";
import { changePath } from "../../utils/utils";

export default function Header() {
  const [showSub, setShowSub] = useState([false, false, false]);
  const mouseOverSub = (index) => {
    let aaa = [...showSub];
    aaa[index] = true;
    setShowSub(aaa);
  };
  const mouseOutSub = (index) => {
    let aaa = [...showSub];
    aaa[index] = false;
    setShowSub(aaa);
  };

  return (
    <div style={{ width: "100%", height: "100%", border: "1px solid black" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div style={{ gridColumn: "span 3" }}>블로그이름</div>
        <div onMouseOver={mouseOverSub(0)} onMouseOut={mouseOutSub(0)}>
          메뉴1
          <div
            style={showSub[0] ? { display: "block" } : { display: "none" }}
            onClick={changePath("/contents/board")}
          >
            서브메뉴1
          </div>
          <div
            style={showSub[0] ? { display: "block" } : { display: "none" }}
            onClick={changePath("/contents/board")}
          >
            서브메뉴2
          </div>
        </div>
        <div onMouseOver={mouseOverSub(1)} onMouseOut={mouseOutSub(1)}>
          메뉴2
          <div
            style={showSub[1] ? { display: "block" } : { display: "none" }}
            onClick={changePath("/contents/board")}
          >
            서브메뉴1
          </div>
          <div
            style={showSub[1] ? { display: "block" } : { display: "none" }}
            onClick={changePath("/contents/board")}
          >
            서브메뉴2
          </div>
        </div>
        <div onMouseOver={mouseOverSub(2)} onMouseOut={mouseOutSub(2)}>
          메뉴3
          <div
            style={showSub[2] ? { display: "block" } : { display: "none" }}
            onClick={changePath("/contents/board")}
          >
            서브메뉴1
          </div>
          <div
            style={showSub[2] ? { display: "block" } : { display: "none" }}
            onClick={changePath("/contents/board")}
          >
            서브메뉴2
          </div>
        </div>
      </div>
    </div>
  );
}
