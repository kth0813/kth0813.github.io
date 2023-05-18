import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";
import Detail from "./pages/contents/Detail";
import List from "./pages/contents/List";

import Search from "./pages/contents/Search";
import Main from "./pages/main/Main";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="" element={<Main />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/:seq" element={<Detail />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/list" element={<List />} />
        </Route>
      </Routes>
    </Router>
  );
}
