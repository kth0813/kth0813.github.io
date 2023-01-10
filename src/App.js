import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";
import BoardList from "./pages/contents/BoardList";
import Main from "./pages/main/Main";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="" element={<Main />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/contents/board" element={<BoardList />} />
        </Route>
      </Routes>
    </Router>
  );
}
