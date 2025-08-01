import { useState } from "react";
import Left from "./Left";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#fffafc", position: "relative" }}>
      {/* 햄버거 버튼 (모바일에서만 보여짐) */}
      <button className="hamburger-button" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>

      {/* 왼쪽 메뉴 (모바일/PC 모두 토글 포함) */}
      <div className={`left-wrapper ${showMenu ? "show" : ""}`}>
        <Left onClickLink={handleCloseMenu} />
      </div>

      {/* 본문 영역 */}
      <main style={{ flexGrow: 1, padding: "40px 20px" }}>{children}</main>
    </div>
  );
}
