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
            textColors={["#3E3E3E"]}
            backgroundColors={["#E8D9FF", "#D9E5FF", "#FFD8D8", "#FAE0D4", "#F6B2C0", "#A084DC", "#B2CCFF"]}
            outerBorderColor="#BBAAFF"
            outerBorderWidth={10}
            radiusLineColor="#DDDDDD"
            radiusLineWidth={0}
            textDistance="70"
            responsive
          />
        </div>

        <button className="spin-button" onClick={handleSpinClick}>
          돌리기
        </button>
        {prize.option && (
          <div className="result-popup">
            <button className="close-button" onClick={() => setPrize({})}>
              ×
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

      <div className="remain-text">남은 사람: {data.length}명</div>
    </div>
  );
}
