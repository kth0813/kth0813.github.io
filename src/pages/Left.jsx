import { NavLink } from "react-router-dom";

export default function Left({ onClickLink }) {
  return (
    <aside className="left-aside">
      <h2 className="left-title">메뉴</h2>
      <nav>
        <ul className="left-menu">
          <li className="left-menu-item">
            <NavLink
              to="/main"
              className={({ isActive }) => (isActive ? "left-link active" : "left-link")}
              onClick={onClickLink}
            >
              메인 화면
            </NavLink>
          </li>
          <li className="left-menu-item">
            <NavLink
              to="/yedarm"
              className={({ isActive }) => (isActive ? "left-link active" : "left-link")}
              onClick={onClickLink}
            >
              예닮이란?
            </NavLink>
          </li>
          <li className="left-menu-item">
            <NavLink
              to="/roulette"
              className={({ isActive }) => (isActive ? "left-link active" : "left-link")}
              onClick={onClickLink}
            >
              룰렛 추첨
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
