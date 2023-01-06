import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./pages/contents/BoardList";
import Main from "./pages/main/Main";
import { changePath } from "./utils/utils";

export default function App() {
  useEffect(() => {
    changePath("/contents/board");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/contents/board" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}
