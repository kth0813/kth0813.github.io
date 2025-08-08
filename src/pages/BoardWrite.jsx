import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { alertConfirm, alertInfo } from "../utils/commonUtils";
import { useAuth } from "../AuthContext";

export default function BoardWrite() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) return alertInfo("제목을 입력해주세요");
    if (!user) return alertInfo("로그인이 필요합니다.", () => navigate("/login"));

    alertConfirm("작성하시겠습니까?", async () => {
      await addDoc(collection(db, "board"), {
        title,
        body,
        authName: user.displayName || "익명",
        ownerUid: user.uid,
        creDate: serverTimestamp(),
        file: ""
      });
      alertInfo("등록되었습니다!");
      navigate("/board");
    });
  };

  useEffect(() => {
    if (!user) {
      alertInfo("로그인이 필요합니다.", () => navigate("/login"));
    }
  }, [user, navigate]);

  return (
    <div className="page">
      <div className="header">글쓰기</div>
      <section className="intro-section">
        <div className="meta" style={{ marginBottom: ".5rem" }}>
          작성자: <b>{user?.displayName || "익명"}</b>
        </div>

        <div className="form-row">
          <input
            className="input"
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <textarea
            className="textarea"
            placeholder="내용을 입력하세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-row">
          <button className="btn btn-primary" onClick={handleSubmit}>
            작성 완료
          </button>
        </div>
      </section>
    </div>
  );
}
