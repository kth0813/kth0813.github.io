import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./pages/contents/BoardList";
import Main from "./pages/main/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/contents/board" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}
