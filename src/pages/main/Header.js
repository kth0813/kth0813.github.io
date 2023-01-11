import React, { useState } from "react";
import { changePath } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const MenuList = props.MenuList;
  const navigate = useNavigate();
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
        onClick={() => {
          navigate("/main");
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
        {MenuList.map((item, index) => (
          <div
            key={index}
            style={{
              margin: "0 10px",
            }}
            onClick={() => (item.sub ? undefined : navigate(item.addr))}
            onMouseOver={() => toggleSub(index, "on")}
            onMouseOut={() => toggleSub(index)}
          >
            <div
              style={{
                width: "150px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              {item.name}
            </div>
            {item.sub && showSub[index] && (
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
                {item.sub &&
                  item.sub.map((item2, index2) => (
                    <div
                      key={index2}
                      style={{ margin: "0 0 10px" }}
                      onClick={() => navigate(item.addr + "/" + item2.addr)}
                    >
                      {item2.name}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
