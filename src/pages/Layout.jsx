import { useState } from "react";
import Left from "./Left";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#fffafc", position: "relative" }}>
      <button className="hamburger-button" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>
      <div className={`left-wrapper ${showMenu ? "show" : ""}`}>
        <Left onClickLink={handleCloseMenu} />
      </div>
      <main style={{ flexGrow: 1, padding: "40px 20px" }}>{children}</main>
    </div>
  );
}
