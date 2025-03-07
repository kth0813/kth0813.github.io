import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./pages/Card";
import Layout from "./pages/Layout";
import Roulette from "./pages/Roulette";
import Roulette2 from "./pages/Roulette2";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/roulette2" element={<Roulette2 />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}
