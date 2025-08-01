import { Link } from "react-router-dom";

export default function Left({ onClickLink }) {
  return (
    <aside className="left-aside">
      <h2 className="left-title">✨ 메뉴 ✨</h2>
      <nav>
        <ul className="left-menu">
          <li className="left-menu-item">
            <Link to="/main" className="left-link" onClick={onClickLink}>
              홈
            </Link>
          </li>
          <li className="left-menu-item">
            <Link to="/roulette" className="left-link" onClick={onClickLink}>
              룰렛
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
