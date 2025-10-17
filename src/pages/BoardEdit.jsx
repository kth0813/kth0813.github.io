import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { alertConfirm, alertInfo } from "../utils/commonUtils";
import { useAuth } from "../AuthContext";

export default function BoardEdit() {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState(null);

  const loadPost = async () => {
    const docRef = doc(db, "board", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setPost({ id: docSnap.id, ...data });
      setTitle(data.title || "");
      setBody(data.body || "");
    }
  };

  const handleUpdate = () => {
    if (!title.trim()) return alertInfo("제목을 입력해주세요");
    if (!user) return alertInfo("로그인이 필요합니다.", () => navigate("/login"));
    if (!post || post.ownerUid !== user.uid) return alertInfo("본인 글만 수정할 수 있습니다.");

    alertConfirm("수정하시겠습니까?", async () => {
      const docRef = doc(db, "board", id);
      await updateDoc(docRef, {
        title,
        body,
        updateDate: serverTimestamp(),
        file: ""
      });
      alertInfo("수정 완료!");
      navigate(`/board/${id}`);
    });
  };

  useEffect(() => {
    if (!user) {
      alertInfo("로그인이 필요합니다.", () => navigate("/login"));
    } else {
      loadPost();
    }
  }, [id, user, navigate, loadPost]);

  return (
    <div className="page">
      <div className="header">게시글 수정</div>
      <section className="intro-section">
        <div className="meta" style={{ marginBottom: ".5rem" }}>
          작성자: <b>{post?.authName || "익명"}</b>
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
        <button className="btn btn-primary" onClick={handleUpdate}>
          수정 완료
        </button>
      </section>
    </div>
  );
}
