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
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#3498db",
          color: "#ffffff",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        시작
      </button>
      <Wheel
        spinDuration={1}
        startingOptionIndex={Math.floor(Math.random() * data.length)}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={StopSpinning}
      />
      {prize && <div style={{ fontSize: "40px" }}>당첨자 : {prize}</div>}
    </div>
  );
}
