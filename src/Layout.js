import { Outlet } from "react-router-dom";
import Header from "./pages/main/Header";
import SideMenu from "./pages/main/SideMenu";
const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        margin: "0 auto",
        flexWrap: "wrap",
        // backgroundColor: "#F6F6F6",
        backgroundColor: "lightgray",
      }}
    >
      <Header />
      <SideMenu />
      <div
        style={{
          flexGrow: 1,
          height: "100vh",
          width: "75vw",
          backgroundColor: "white",
          margin: "10px 5vw 10px 0",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
