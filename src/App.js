import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./pages/Card";
import Layout from "./pages/Layout";
import Roulette from "./pages/Roulette";
import CustomRoulette from "./pages/CustomRoulette";
import Yedarm from "./pages/Yedarm";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import BoardWrite from "./pages/BoardWrite";
import BoardEdit from "./pages/BoardEdit";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Snow from "./components/Snow";

export default function App() {
  return (
    <Router>
      <Snow />
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/yedarm" element={<Yedarm />} />
          <Route path="/croulette" element={<CustomRoulette />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/:id" element={<BoardDetail />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/edit/:id" element={<BoardEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}
