import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./pages/Card";
import Layout from "./pages/Layout";
import Roulette from "./pages/Roulette";

export default function App() {
  return (
    <Router basename="/kth0813.github.io">
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}
