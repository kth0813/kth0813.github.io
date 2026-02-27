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
  const [showPopup, setShowPopup] = useState(false);
  const [startingOptionIndex] = useState(Math.floor(Math.random() * data.length));

  const handleSpinClick = () => {
    setPrize({});
    setShowPopup(false);
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
    setShowPopup(true);
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
  const lovelyPointer = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30 60 L10 10 Q30 0 50 10 Z" fill="%23FFB7B2" stroke="%23FFFFFF" stroke-width="2"/><circle cx="30" cy="20" r="6" fill="%23FFFFFF"/></svg>`;

  return (
    <div className="page">
      <div className="header">룰렛 추첨</div>
      <div className="roulette-container">
        <div className="roulette-wheel">
          <Wheel
            spinDuration={1}
            startingOptionIndex={startingOptionIndex}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={StopSpinning}
            textColors={["#666666"]}
            backgroundColors={["#ff9aa2", "#ffb7b2", "#ffdac1", "#e2f0cb", "#b5ead7", "#c7ceea", "#80e9ff", "#ff8fab"]}
            outerBorderColor="#ffffff"
            outerBorderWidth={8}
            radiusLineColor="#ffffff"
            radiusLineWidth={3}
            fontFamily="Cafe24Ssurround"
            textDistance={75}
            responsive
            pointerProps={{
              src: lovelyPointer,
              style: {
                width: "60px",
                height: "60px",
                marginTop: "10px",
                marginRight: "10px",
                transform: "rotate(45deg)",
                filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.1))"
              }
            }}
          />
        </div>

        <button className="spin-button" onClick={handleSpinClick}>
          {mustSpin ? "추첨 중" : "돌리기"}
        </button>
        {showPopup && prize.option && (
          <div className="result-popup">
            <button className="close-button" onClick={() => setShowPopup(false)}>
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
