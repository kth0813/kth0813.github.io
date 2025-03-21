import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./pages/Card";
import Layout from "./pages/Layout";
import Roulette from "./pages/Roulette";
import CustomRoulette from "./pages/CustomRoulette";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/croulette" element={<CustomRoulette />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}
