import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { alertInfo } from "../utils/commonUtils";

export default function BoardList() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/board/${id}`);
  };

  const loadPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "board"));
    let result = [];
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    result.sort((a, b) => (b.date?.seconds || 0) - (a.date?.seconds || 0));
    setPosts(result);
  };

  const filteredPosts = posts.filter((post) => (post.title || "").toLowerCase().includes(search.toLowerCase()));

  const write = () => {
    if (!user) {
      alertInfo("로그인이 필요합니다.", () => navigate("/login"));
      return;
    }
    navigate("/board/write");
  };

  return (
    <div className="page">
      <div className="header">게시판</div>
      <section className="intro-section">
        <div className="toolbar">
          <button className="btn btn-primary" onClick={write}>
            글쓰기
          </button>
          <div className="toolbar-right">
            <input
              className="input"
              type="text"
              placeholder="제목 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <table className="worship-table">
          <thead>
            <tr>
              <th className="worship-cell">제목</th>
              <th className="worship-cell">작성자</th>
              <th className="worship-cell">작성일</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.length === 0 && (
              <tr>
                <td colSpan="3" className="empty">
                  게시글이 없습니다.
                </td>
              </tr>
            )}
            {filteredPosts.map((post) => (
              <tr key={post.id} onClick={() => handleRowClick(post.id)} style={{ cursor: "pointer" }}>
                <td className="worship-cell">{post.title}</td>
                <td className="worship-cell">{post.authName || "익명"}</td>
                <td className="worship-cell">
                  {post.date?.seconds ? dayjs(post.date.seconds * 1000).format("YYYY-MM-DD HH:mm") : "날짜 없음"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
