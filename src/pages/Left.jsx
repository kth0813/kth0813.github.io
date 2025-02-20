import { useNavigate } from "react-router-dom";

export default function Left() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="buttonA" onClick={() => navigate("/main")}>
        메인 화면
      </button>
      <button className="buttonA" onClick={() => navigate("/roulette")}>
        룰렛 추첨
      </button>
      <button className="buttonA" onClick={() => navigate("/card")}>
        카드 뽑기
      </button>
    </div>
  );
}
