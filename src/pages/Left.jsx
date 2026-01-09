import { NavLink /* useNavigate*/ } from "react-router-dom";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";

export default function Left({ onClickLink }) {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  // const auth = getAuth();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, [auth]);

  // const handleLogout = async () => {
  //   await signOut(auth);
  //   navigate("/main");
  // };
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
          {/* <li className="left-menu-item">
            <Link to="/board" className="left-link" onClick={onClickLink}>
              게시판
            </Link>
          </li>
           <li className="left-menu-item">
            {user ? (
              <div
                className="left-link"
                onClick={handleLogout}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                로그아웃
              </div>
            ) : (
              <Link to="/login" className="left-link" onClick={onClickLink}>
                로그인
              </Link>
            )}
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}
