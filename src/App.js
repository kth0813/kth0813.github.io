import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";
import Board1 from "./pages/contents/Board1";
import Board2 from "./pages/contents/Board2";
import Board3 from "./pages/contents/Board3";
import Board4 from "./pages/contents/Board4";
import Board5 from "./pages/contents/Board5";
import Board6 from "./pages/contents/Board6";

import Main from "./pages/main/Main";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="" element={<Main />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/contents/board1" element={<Board1 />} />
          <Route exact path="/contents/board2" element={<Board2 />} />
          <Route exact path="/menu2/sub1" element={<Board3 />} />
          <Route exact path="/menu2/sub2" element={<Board4 />} />
          <Route exact path="/menu3/sub1" element={<Board5 />} />
          <Route exact path="/menu3/sub2" element={<Board6 />} />
        </Route>
      </Routes>
    </Router>
  );
}
