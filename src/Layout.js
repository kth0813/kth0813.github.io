import { Outlet } from "react-router-dom";
import Header from "./pages/main/Header";
import SideMenu from "./pages/main/SideMenu";
import Footer from "./pages/main/Footer";
const Layout = () => {
  const MenuList = [
    { addr: "main", name: "메인메뉴" },
    {
      addr: "contents",
      name: "게시판",
      sub: [
        { addr: "board1", name: "게시판1" },
        { addr: "board2", name: "게시판2" },
      ],
    },
    {
      addr: "menu2",
      name: "메뉴2",
      sub: [
        { addr: "sub1", name: "게시판2-1" },
        { addr: "sub2", name: "게시판2-2" },
      ],
    },
    {
      addr: "menu3",
      name: "메뉴3",
      sub: [
        { addr: "sub1", name: "게시판3-1" },
        { addr: "sub2", name: "게시판3-2" },
      ],
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "80vw",
        justifyContent: "center",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
      <Header MenuList={MenuList} />
      <SideMenu MenuList={MenuList} />
      <div
        style={{
          flexGrow: 1,
          minHeight: "80vh",
          borderRight: "1px solid black",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
