import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { alertInfo } from "../utils/commonUtils";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!name.trim()) return alertInfo("이름을 입력하세요");
    if (!email.trim()) return alertInfo("이메일을 입력하세요");
    if (!pw.trim() || !pw2.trim()) return alertInfo("비밀번호를 입력하세요");
    if (pw.length < 6) return alertInfo("비밀번호는 6자 이상이어야 합니다");
    if (pw !== pw2) return alertInfo("비밀번호가 서로 다릅니다");

    try {
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(auth, email, pw);
      await updateProfile(cred.user, { displayName: name.trim() });
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email: cred.user.email,
        name: name.trim(),
        role: "user",
        creDate: serverTimestamp()
      });

      try {
        await sendEmailVerification(cred.user);
      } catch (_) {}
      alertInfo("회원가입이 완료되었습니다", () => navigate("/login"));
    } catch (e) {
      let msg = "회원가입에 실패했습니다";
      if (e.code === "auth/email-already-in-use") msg = "이미 가입된 이메일입니다";
      if (e.code === "auth/invalid-email") msg = "이메일 형식을 확인해주세요";
      if (e.code === "auth/weak-password") msg = "비밀번호가 너무 약합니다";
      alertInfo(`${msg}\n(${e.code})`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="header">회원가입</div>
      <section className="intro-section">
        <div className="form-row">
          <input
            className="input"
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="password"
            placeholder="비밀번호 (6자 이상)"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="password"
            placeholder="비밀번호 확인"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={onSubmit} disabled={loading}>
          {loading ? "처리중..." : "회원가입"}
        </button>
      </section>
    </div>
  );
}
