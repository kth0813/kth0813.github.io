import { Wheel } from "react-custom-roulette";
import { useState } from "react";

export default function Roulette(props) {
  //데이터
  const data = props.member;

  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스
  const [prize, setPrize] = useState("");
  const handleSpinClick = () => {
    setPrize("");
    if (!mustSpin) {
      // 1. 랜덤 기준점 설정
      const pivot = Math.floor(Math.random() * 99 + 1);
      let stack = 0; // 가중치

      let percentage = data.map((row, idx) => {
        {
          return row.percentage;
        }
      });

      let newPrizeNumber = null; //당첨 인덱스

      percentage.some((row, idx) => {
        //2. 가중치 누적
        stack += row;

        // 3. 누적 가중치 값이 기준점 이상이면 종료
        if (pivot <= stack) {
          newPrizeNumber = idx;
          return true;
        }
      });
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const StopSpinning = () => {
    setMustSpin(false);
    setPrize(data[prizeNumber].option);
  };

  return (
    <div className="App">
      <button
        onClick={handleSpinClick}
        style={{
          zIndex: 1,
          borderRadius: "3vw",
          color: "#ffffff",
          fontSize: "16px",
          cursor: "pointer",
          width: "10vw",
          height: "3vw",
          background: "linear-gradient(to bottom right, #7d9fa9, #dbc2c5)",
          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
          border: "none",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        돌리기
      </button>
      <Wheel
        spinDuration={1}
        startingOptionIndex={Math.floor(Math.random() * data.length)}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={StopSpinning}
      />
      {prize && <div style={{ fontSize: "40px" }}>당첨자 : {prize} !!!</div>}
    </div>
  );
}
