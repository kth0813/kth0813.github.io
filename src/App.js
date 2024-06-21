import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Detail from "./pages/contents/Detail";
import List from "./pages/contents/List";
import Search from "./pages/contents/Search";
import Main from "./pages/main/Main";
import Card from "./pages/main/Card";
import Card2 from "./pages/main/Card2";
import Map from "./pages/main/Map";
import { useEffect } from "react";

export default function App() {
  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/card2" element={<Card2 />} />
        <Route exact path="" element={<Card />} />
        <Route exact path="/main" element={<Card />} />
        <Route element={<Layout />}>
          <Route exact path="/:seq" element={<Detail />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/map" element={<Map />} />
        </Route>
      </Routes>
    </Router>
  );
}
