import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";
import Board1 from "./pages/contents/Board1";
import Search from "./pages/contents/Search";
import Main from "./pages/main/Main";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="" element={<Main />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/contents/board1" element={<Board1 />} />
          <Route exact path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}
