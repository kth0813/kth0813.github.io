import { Wheel } from "react-custom-roulette";
import { Fragment, useState } from "react";

export default function Roulette() {
  const list = [
    { name: "권유담", useYn: "Y" },
    { name: "김광은", useYn: "N" },
    { name: "김광은", useYn: "N" },
    { name: "김광은", useYn: "N" },
    { name: "김광은", useYn: "N" },
    { name: "김다인", useYn: "Y" },
    { name: "김민지", useYn: "Y" },
    { name: "김대원", useYn: "Y" },
    { name: "김예림", useYn: "Y" },
    { name: "김예송", useYn: "Y" },
    { name: "김여명", useYn: "Y" },
    { name: "김용빈", useYn: "Y" },
    { name: "김주원", useYn: "Y" },
    { name: "김지원", useYn: "Y" },
    { name: "김지주", useYn: "Y" },
    { name: "김진명", useYn: "Y" },
    { name: "김태훈", useYn: "Y" },
    { name: "박도희", useYn: "Y" },
    { name: "박병호", useYn: "Y" },
    { name: "박예빈", useYn: "Y" },
    { name: "박윤걸", useYn: "Y" },
    { name: "백민서", useYn: "Y" },
    { name: "백민우", useYn: "Y" },
    { name: "백하영", useYn: "Y" },
    { name: "서봉규", useYn: "Y" },
    { name: "신지원", useYn: "Y" },
    { name: "오송현", useYn: "Y" },
    { name: "유연호", useYn: "Y" },
    { name: "유리", useYn: "Y" },
    { name: "이나래", useYn: "Y" },
    { name: "이명철", useYn: "Y" },
    { name: "이민수", useYn: "Y" },
    { name: "이신우", useYn: "Y" },
    { name: "이연우", useYn: "Y" },
    { name: "이유나", useYn: "Y" },
    { name: "이지우", useYn: "Y" },
    { name: "이진호", useYn: "Y" },
    { name: "이찬미", useYn: "Y" },
    { name: "이하빈", useYn: "Y" },
    { name: "장진영", useYn: "Y" },
    { name: "정회창", useYn: "Y" },
    { name: "전솔담", useYn: "Y" },
    { name: "주예지", useYn: "Y" },
    { name: "차영광", useYn: "Y" },
    { name: "최소민", useYn: "Y" },
    { name: "최혜원", useYn: "Y" },
    { name: "한예지", useYn: "Y" },
    { name: "김주훈 강도사님", useYn: "Y" },
    { name: "박순성 집사님", useYn: "Y" }
  ];
  const filteredList = list.filter((member) => member.useYn != "Y");
  const data = filteredList.map((member) => {
    return {
      ...member,
      option: member.name,
      percentage: Math.ceil(100 / filteredList.length)
    };
  });
  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스
  const [prize, setPrize] = useState({});
  const handleSpinClick = () => {
    setPrize({});
    if (!mustSpin) {
      // 1. 랜덤 기준점 설정
      const pivot = Math.floor(Math.random() * 99 + 1);
      let stack = 0; // 가중치

      let percentage = data.map((row) => {
        {
          return row.percentage;
        }
      });

      let newPrizeNumber = null; //당첨 인덱스

      percentage.some((row, idx) => {
        stack += row; //2. 가중치 누적

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
          marginTop: "60px"
        }}
      >
        <div style={{ transform: "scale(1.2)" }}>
          <Wheel
            spinDuration={1}
            startingOptionIndex={Math.floor(Math.random() * data.length)}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={StopSpinning}
            textColors={["#3E3E3E"]}
            backgroundColors={["#FFD8D8", "#FAE0D4", "#FAF4C0", "#CEFBC9", "#D9E5FF", "#E8D9FF", "#FFD9EC"]}
            outerBorderColor="gray"
            outerBorderWidth="1"
            radiusLineColor="gray"
            radiusLineWidth="1"
            textDistance="70"
            responsive
          />
        </div>
      </div>
      {prize.option && (
        <Fragment>
          <div style={{ fontSize: "40px", marginTop: "60px" }}>당첨자 : {prize.option} !!!</div>
          <div style={{ fontSize: "25px" }}>
            금요일까지 윤걸총무님에게 <br /> 답변을 보내주세요 !
          </div>
        </Fragment>
      )}
    </div>
  );
}
