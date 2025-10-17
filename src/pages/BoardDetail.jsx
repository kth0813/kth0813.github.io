import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import dayjs from "dayjs";
import { alertConfirm, alertInfo } from "../utils/commonUtils";
import { useAuth } from "../AuthContext";

export default function BoardDetail() {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const loadPost = async () => {
    const docRef = doc(db, "board", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) setPost({ id: docSnap.id, ...docSnap.data() });
    else setPost(null);
  };

  const isOwner = user && post && post.ownerUid === user.uid;

  const handleDelete = () => {
    if (!user) return alertInfo("로그인이 필요합니다.", () => navigate("/login"));
    if (!isOwner) return alertInfo("본인 글만 삭제할 수 있습니다.");
    alertConfirm("삭제하시겠습니까?", async () => {
      await deleteDoc(doc(db, "board", id));
      alertInfo("삭제되었습니다.");
      navigate("/board");
    });
  };

  const handleEdit = () => {
    if (!user) return alertInfo("로그인이 필요합니다.", () => navigate("/login"));
    if (!isOwner) return alertInfo("본인 글만 수정할 수 있습니다.");
    navigate(`/board/edit/${id}`);
  };

  useEffect(() => {
    loadPost();
  }, [id, loadPost]);

  if (post == null) return <div style={{ padding: "2rem" }}>게시글이 존재하지 않습니다.</div>;

  return (
    <div className="page">
      <div className="header">게시글 상세</div>
      <div className="intro-section" style={{ padding: "1.25rem" }}>
        <h2 style={{ marginBottom: ".25rem" }}>{post.title}</h2>
        <div className="meta" style={{ marginBottom: ".75rem" }}>
          작성자: <b>{post.authName || "익명"}</b> ·{" "}
          {post.date?.seconds ? dayjs(post.date.seconds * 1000).format("YYYY-MM-DD HH:mm") : "날짜 없음"}
        </div>
        <hr style={{ margin: "1rem 0" }} />
        <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{post.body || "내용 없음"}</p>

        {isOwner && (
          <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem" }}>
            <button className="btn btn-ghost" onClick={handleEdit}>
              ✏️ 수정
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              🗑 삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
