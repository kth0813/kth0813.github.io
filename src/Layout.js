import { Outlet } from "react-router-dom";
import Header from "./pages/main/Header";
import SideMenu from "./pages/main/SideMenu";
import Footer from "./pages/main/Footer";
const Layout = () => {
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
      <Header />
      <SideMenu />
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
