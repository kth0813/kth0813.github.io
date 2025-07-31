import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import list from "./List";

export default function Roulette() {
  const filteredList = list.filter((member) => member.useYn !== "Y");
  const data = filteredList.map((member) => {
    return { ...member, option: member.name, percentage: Math.ceil(100 / filteredList.length) };
  });
  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스
  const [prize, setPrize] = useState({});
  const handleSpinClick = () => {
    setPrize({});
    if (!mustSpin) {
      const pivot = Math.floor(Math.random() * 99 + 1); // 랜덤 기준점 설정
      let stack = 0; // 가중치
      let percentage = data.map((row) => row.percentage);
      let newPrizeNumber = null; //당첨 인덱스

      percentage.some((row, idx) => {
        stack += row; // 가중치 누적

        if (pivot <= stack) {
          newPrizeNumber = idx;
          return true; // 누적 가중치 값이 기준점 이상이면 종료
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

  return (
    <div className="App" style={{ paddingTop: "20px" }}>
      <button className="buttonA" onClick={handleSpinClick}>
        돌리기
      </button>
      <div style={{ fontSize: "25px" }}>남은사람 : {data.length}명</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          position: "relative" // 룰렛 기준
        }}
      >
        {/* 룰렛 */}
        <div style={{ transform: "scale(1.2)" }}>
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
        {prize.option && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              backgroundColor: "white",
              border: "3px solid #A084DC",
              borderRadius: "12px",
              padding: "30px 40px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              animation: "scaleUp 0.4s ease-out, fadeScale 0.6s ease-out, blinkBorder 1s infinite ease-in-out"
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#8661C1" }}>
              <div
                style={{
                  animation: "spinIcon 3s linear infinite",
                  fontSize: "30px",
                  display: "inline-block"
                }}
              >
                🎉
              </div>{" "}
              당첨자 : {prize.option}{" "}
              <div
                style={{
                  animation: "spinIcon 3s linear infinite",
                  fontSize: "30px",
                  display: "inline-block"
                }}
              >
                🎉
              </div>
            </div>
            <div style={{ fontSize: "20px", marginTop: "10px" }}>
              금요일까지 윤걸총무님에게 <br /> 답변을 보내주세요!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
