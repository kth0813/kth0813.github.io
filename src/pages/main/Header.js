import React from "react";
import { changePath } from "../../utils/utils";

export default function Header() {
  return (
    <div style={{ width: "100%", height: "100%", border: "1px soild black" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div style={{ gridColumn: "span 3" }}>블로그이름</div>
        <div>
          메뉴1
          <div onClick={changePath("/contents/board")}>서브메뉴1</div>
          <div onClick={changePath("/contents/board")}>서브메뉴2</div>
        </div>
        <div>
          메뉴2
          <div onClick={changePath("/contents/board")}>서브메뉴1</div>
          <div onClick={changePath("/contents/board")}>서브메뉴2</div>
        </div>
        <div>
          메뉴3
          <div onClick={changePath("/contents/board")}>서브메뉴1</div>
          <div onClick={changePath("/contents/board")}>서브메뉴2</div>
        </div>
      </div>
    </div>
  );
}
