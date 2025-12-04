import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import list from "./List";

export default function Roulette() {
  const filteredList = list.filter((member) => member.useYn !== "Y");
  const data = filteredList.map((member) => {
    return { ...member, option: member.name, percentage: Math.ceil(100 / filteredList.length) };
  });
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prize, setPrize] = useState({});

  const handleSpinClick = () => {
    setPrize({});
    if (!mustSpin) {
      const pivot = Math.floor(Math.random() * 99 + 1);
      let stack = 0;
      let percentage = data.map((row) => row.percentage);
      let newPrizeNumber = null;

      percentage.some((row, idx) => {
        stack += row;
        if (pivot <= stack) {
          newPrizeNumber = idx;
          return true;
        }
        return false;
      });
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const StopSpinning = () => {
    setMustSpin(false);
    setPrize(data[prizeNumber]);
  };

  const result = (prize) => {
    switch (prize.type) {
      case "M":
        return `${prize.name} 형제`;
      case "F":
        return `${prize.name} 자매`;
      default:
        return prize.name;
    }
  };
  const goldPointer = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30 60 L0 0 H60 Z" fill="%23FFD700" stroke="%23FFFFFF" stroke-width="2"/><circle cx="30" cy="15" r="8" fill="%23c41e3a" stroke="%23FFFFFF" stroke-width="1"/></svg>`;
  return (
    <div className="page">
      <div className="header">룰렛 추첨</div>
      <div className="roulette-container">
        <div className="roulette-wheel">
          <Wheel
            spinDuration={1}
            startingOptionIndex={Math.floor(Math.random() * data.length)}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={StopSpinning}
            textColors={["#FFFFFF", "#3E3E3E", "#FFFFFF", "#3E3E3E"]}
            backgroundColors={["#8B0000", "#D4AF37", "#006400", "#FFFDD0"]}
            outerBorderColor="#FFD700"
            outerBorderWidth={10}
            radiusLineColor="#FFD700"
            radiusLineWidth={2}
            fontFamily="Cafe24Ssurround"
            textDistance="70"
            responsive
            pointerProps={{
              src: goldPointer,
              style: {
                width: "50px",
                height: "50px",
                marginTop: "25px",
                marginRight: "25px",
                transform: "rotate(45deg)"
              }
            }}
          />
        </div>

        <button className="spin-button" onClick={handleSpinClick}>
          {mustSpin ? "추첨 중..." : "돌리기"}
        </button>
        {prize.option && (
          <div className="result-popup">
            <button className="close-button" onClick={() => setPrize({})}>
              X
            </button>
            <div className="result-title">🎉 당첨자 : {result(prize)} 🎉</div>
            <div className="result-text">
              금요일까지 윤걸총무님에게 <br /> 답변을 보내주세요!
            </div>
            <button className="retry-button" onClick={handleSpinClick}>
              다시 돌리기
            </button>
          </div>
        )}
      </div>
      <div className="ac">
        <div className="remain-text">남은 사람: {data.length}명</div>
      </div>
    </div>
  );
}
