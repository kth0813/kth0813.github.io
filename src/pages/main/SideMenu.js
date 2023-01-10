import React from "react";
import { useLocation } from "react-router";

export default function SideMenu() {
  const location = useLocation();
  const MenuList = [
    { addr: "main", name: "메인메뉴" },
    {
      addr: "contents",
      name: "게시판",
      sub: [
        { addr: "board", name: "게시판1" },
        { addr: "board2", name: "게시판2" },
      ],
    },
    {
      addr: "main2",
      name: "메뉴2",
      sub: [
        { addr: "sub1", name: "게시판1" },
        { addr: "sub2", name: "게시판2" },
      ],
    },
    {
      addr: "main3",
      name: "메뉴3",
      sub: [
        { addr: "sub1", name: "게시판1" },
        { addr: "sub2", name: "게시판2" },
      ],
    },
  ];
  return (
    <div
      style={{
        width: "150px",
        minHeight: "80vh",
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
      }}
    >
      {JSON.stringify(location?.pathname.split("/")[1])}
      {JSON.stringify(location?.pathname.split("/")[2])}

      <div
        style={{
          textAlign: "center",
        }}
      >
        {MenuList.map((item) => {
          if (item.addr == location?.pathname?.split("/")[1])
            return (
              <div
                style={{
                  margin: "30px 0 ",
                  fontSize: "20px",
                }}
              >
                {item.name}
              </div>
            );
        })}
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
