import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./pages/Card";
import Layout from "./pages/Layout";
import Roulette from "./pages/Roulette";
import Yedarm from "./pages/Yedarm";
import CustomRoulette from "./pages/CustomRoulette";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/yedarm" element={<Yedarm />} />
          <Route path="/croulette" element={<CustomRoulette />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}
