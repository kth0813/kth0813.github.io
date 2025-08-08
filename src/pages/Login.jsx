import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { alertInfo } from "../utils/commonUtils";
import googleLogo from "../img/g-logo.png";

async function upsertUserDoc(u) {
  const ref = doc(db, "users", u.uid);
  const snap = await getDoc(ref);
  await setDoc(
    ref,
    {
      uid: u.uid,
      email: u.email || "",
      name: u.displayName || "",
      photoURL: u.photoURL || "",
      role: snap.exists() ? snap.data().role || "user" : "user",
      lastLogin: serverTimestamp(),
      creDate: snap.exists() ? snap.data().createdAt || serverTimestamp() : serverTimestamp()
    },
    { merge: true }
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const cred = await getRedirectResult(auth);
        if (cred?.user) {
          await upsertUserDoc(cred.user);
          navigate("/main");
        }
      } catch (e) {
        alertInfo(`구글 로그인에 실패하였습니다. (${e.code})`);
      }
    })();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, pw);
      navigate("/main");
    } catch (e) {
      const invalidCode = [
        "auth/invalid-login-credentials",
        "auth/invalid-credential",
        "auth/user-not-found",
        "auth/wrong-password"
      ];
      if (invalidCode.includes(e.code)) alertInfo("이메일 혹은 비밀번호가 일치하지 않습니다.");
      else if (e.code == "auth/network-request-failed") alertInfo("네트워크 연결에 실패 하였습니다.");
      else if (e.code == "auth/invalid-email") alertInfo("잘못된 이메일 형식입니다.");
      else if (e.code == "auth/internal-error") alertInfo("잘못된 요청입니다.");
      else alertInfo("로그인에 실패하였습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const cred = await signInWithPopup(auth, googleProvider);
      await upsertUserDoc(cred.user);
      navigate("/main");
    } catch (e) {
      if (e.code === "auth/popup-closed-by-user") {
        alertInfo("로그인이 취소되었습니다");
        return;
      }
      if (e.code === "auth/popup-blocked") {
        await signInWithRedirect(auth, googleProvider);
        return;
      }
      alertInfo(`구글 로그인에 실패하였습니다. (${e.code})`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="header">로그인</div>
      <section className="intro-section">
        <div className="form-row">
          <input
            className="input"
            type="email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        <div className="form-row" style={{ display: "flex", gap: ".5rem" }}>
          <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>
            {loading ? "처리중..." : "로그인"}
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/signup")} disabled={loading}>
            회원가입
          </button>
          <button className="btn btn-google" onClick={handleGoogleLogin} disabled={loading}>
            <img src={googleLogo} alt="Google" />
            Google 계정으로 로그인
          </button>
        </div>
      </section>
    </div>
  );
}
