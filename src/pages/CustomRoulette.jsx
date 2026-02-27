import { Wheel } from "react-custom-roulette";
import { useState, useMemo } from "react";

const TEXT_COLORS = ["#3E3E3E"];
const BACKGROUND_COLORS = ["#FFD8D8", "#FAE0D4", "#FAF4C0", "#CEFBC9", "#D9E5FF", "#E8D9FF", "#FFD9EC"];

export default function CustomRoulette() {
  const allList =
    "권유담,김광은,김다인,김대원,김예림,김예송,김여명,김용빈,김주원,김지원,김지주,김진명,김태훈,박도희,박병호,박예빈,박윤걸,백민서,백민우,백하영," +
    "서봉규,신지원,안예현,오송현,유리,이명철,이민수,이신우,이연우,이유나,이지우,이진호,이찬미,장진영,정회창,전솔담,주예지,차영광,최소민,한예지,강도사님,부장님";
  const teamList = "트리플에스조,쓰루패스조,함께하조,밝히조,희희^^조";
  const [text, setText] = useState(allList);

  const data = useMemo(() => {
    const list = text
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);
    return [
      ...list.map((member) => ({ option: member, percentage: Math.ceil(100 / list.length + 1) })),
      { option: "재도전!", percentage: Math.ceil(100 / list.length + 1) }
    ];
  }, [text]);

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prize, setPrize] = useState({});

  const handleSpinClick = () => {
    setPrize({});
    if (!mustSpin) {
      const pivot = Math.floor(Math.random() * 99 + 1);
      let stack = 0;
      let newPrizeNumber = null;

      data.some((row, idx) => {
        stack += row.percentage;
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

  return (
    <div className="App" style={{ paddingTop: "20px" }}>
      <div>
        <button className="buttonA" onClick={() => setText("")}>
          비우기
        </button>
        <button className="buttonA" onClick={() => setText(allList)}>
          사람 채우기
        </button>
        <button className="buttonA" onClick={() => setText(teamList)}>
          조 채우기
        </button>
      </div>
      <div>
        <textarea
          style={{ width: "500px", height: "100px", resize: "none" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="buttonA" onClick={handleSpinClick}>
        돌리기
      </button>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
        <div style={{ transform: "scale(1.2)" }}>
          <Wheel
            spinDuration={1}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={StopSpinning}
            textColors={TEXT_COLORS}
            backgroundColors={BACKGROUND_COLORS}
            outerBorderColor="gray"
            outerBorderWidth="1"
            radiusLineColor="gray"
            radiusLineWidth="1"
            textDistance="75"
            responsive
          />
        </div>
      </div>
      {prize.option && (
        <div style={{ fontSize: "40px", marginTop: "60px" }}>
          {prize.option === "재도전!" ? prize.option : `당첨자 : ${prize.option} !!!`}
        </div>
      )}
    </div>
  );
}
