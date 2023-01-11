import React from "react";
import { useLocation } from "react-router";

export default function SideMenu(props) {
  const location = useLocation();
  const MenuList = props.MenuList;
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
        {MenuList.filter(
          (item) => item.addr == location?.pathname?.split("/")[1]
        ).map((item, index) => (
          <div>
            <div
              style={{
                margin: "30px 0 ",
                fontSize: "20px",
              }}
              key={index}
            >
              {item.name}
            </div>
            {item.sub &&
              item.sub.map((item2, index2) => (
                <div
                  key={index2}
                  style={{
                    margin: "30px 0 ",
                  }}
                >
                  {item2.name}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
