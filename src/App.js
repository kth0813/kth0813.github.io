import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Detail from "./pages/contents/Detail";
import List from "./pages/contents/List";
import Search from "./pages/contents/Search";
import Main from "./pages/main/Main";
import Card from "./pages/main/Card";
import Card2 from "./pages/main/Card2";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/card2" element={<Card2 />} />
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
