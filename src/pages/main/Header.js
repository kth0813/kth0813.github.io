import React, { useState } from "react";
import { changePath } from "../../utils/utils";

export default function Header() {
  const [showSub, setShowSub] = useState([false, false, false]);
  const toggleSub = (index, on) => {
    let sub = [false, false, false];
    if (on) sub[index] = true;
    setShowSub(sub);
  };

  return (
    <div style={{ width: "100%", height: "150px", border: "1px solid black" }}>
      <div
        style={{
          margin: "30px 0 0",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        kth0813의 블로그
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "flex-end",
          top: "10px",
        }}
      >
        <div
          style={{
            margin: "0 10px",
          }}
          onMouseOver={() => toggleSub(0, "on")}
          onMouseOut={() => toggleSub(0)}
        >
          <div
            style={{
              width: "150px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            메뉴1
          </div>
          {showSub[0] && (
            <div
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                margin: "10px 10px 0",
                padding: "10px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div
                style={{ margin: "0 0 10px" }}
                onClick={changePath("/contents/board")}
              >
                서브메뉴1
              </div>
              <div onClick={changePath("/contents/board")}>서브메뉴2</div>
            </div>
          )}
        </div>
        <div
          style={{
            margin: "0 10px",
          }}
          onMouseOver={() => toggleSub(1, "on")}
          onMouseOut={() => toggleSub(1)}
        >
          <div
            style={{
              width: "150px",
              textAlign: "center",
              backgroundColor: "white",
              fontSize: "20px",
            }}
          >
            메뉴2
          </div>
          {showSub[1] && (
            <div
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                margin: "10px 10px 0",
                padding: "10px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div
                style={{ margin: "0 0 10px" }}
                onClick={changePath("/contents/board")}
              >
                서브메뉴1
              </div>
              <div onClick={changePath("/contents/board")}>서브메뉴2</div>
            </div>
          )}
        </div>
        <div
          style={{
            margin: "0 10px",
          }}
          onMouseOver={() => toggleSub(2, "on")}
          onMouseOut={() => toggleSub(2)}
        >
          <div
            style={{
              width: "150px",
              textAlign: "center",
              backgroundColor: "white",
              fontSize: "20px",
            }}
          >
            메뉴3
          </div>
          {showSub[2] && (
            <div
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                margin: "10px 10px 0 ",
                padding: "10px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div
                style={{ margin: "0 0 10px" }}
                onClick={changePath("/contents/board")}
              >
                서브메뉴1
              </div>
              <div onClick={changePath("/contents/board")}>서브메뉴2</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
