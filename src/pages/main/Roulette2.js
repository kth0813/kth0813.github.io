import { Wheel } from "react-custom-roulette";
import { useState } from "react";

export default function Roulette() {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [group, setGroup] = useState("A");
  const [candidates, setCandidates] = useState("");
  const [allCandidates, setAllCandidates] = useState(["김태훈"]);
  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스
  const data = allCandidates.map((member) => {
    return {
      ...member,
      option: member,
      percentage: Math.ceil(100 / allCandidates.length),
    };
  });

  const handleInputChange = (e) => {
    setCandidates(e.target.value);
  };
  const handleRegisterCandidates = () => {
    const newCandidates = candidates
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name !== "");
    const uniqueCandidates = Array.from(
      new Set([...allCandidates, ...newCandidates])
    );
    setAllCandidates(uniqueCandidates);
    setCandidates("");
  };
  const handleSpinClick = (group) => {
    setGroup(group);
    if (allCandidates.length == 1) {
      if (group == "A") {
        setGroupA([...groupA, allCandidates[0]]);
      } else if (group == "B") {
        setGroupB([...groupB, allCandidates[0]]);
      } else {
        setGroupC([...groupC, allCandidates[0]]);
      }
      setAllCandidates([]);
      return;
    }
    if (!mustSpin) {
      const pivot = Math.floor(Math.random() * 99 + 1);
      let stack = 0;
      let percentage = data.map((row) => {
        {
          return row.percentage;
        }
      });
      let newPrizeNumber = null;
      percentage.some((row, idx) => {
        stack += row;
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
    if (group == "A") {
      setGroupA([...groupA, data[prizeNumber].option]);
    } else if (group == "B") {
      setGroupB([...groupB, data[prizeNumber].option]);
    } else {
      setGroupC([...groupC, data[prizeNumber].option]);
    }
    setAllCandidates(
      allCandidates.filter((item) => item != data[prizeNumber].option)
    );
  };

  return (
    <div className="App">
      <textarea
        style={{ height: "150px", width: "380px" }}
        value={candidates}
        onChange={handleInputChange}
      />{" "}
      <div style={{ paddingTop: "10px" }}>
        {" "}
        <button
          style={{ height: "30px", width: "90px" }}
          onClick={handleRegisterCandidates}
        >
          ADD
        </button>{" "}
        <button
          style={{ height: "30px", width: "90px" }}
          onClick={() => handleSpinClick("A")}
        >
          SON
        </button>{" "}
        <button
          style={{ height: "30px", width: "90px" }}
          onClick={() => handleSpinClick("B")}
        >
          FIESTA
        </button>{" "}
        <button
          style={{ height: "30px", width: "90px" }}
          onClick={() => handleSpinClick("C")}
        >
          HARMONY
        </button>
      </div>
      <div style={{ paddingTop: "10px" }}>
        미배정({data.length}명) :{" "}
        {allCandidates.map((name, i) => (
          <span
            key={i}
            onClick={() => {
              setAllCandidates(allCandidates.filter((item) => item != name));
            }}
          >
            {" "}
            {name}
          </span>
        ))}
      </div>
      <div style={{ paddingTop: "10px" }}>
        SON(영광조) :
        {groupA.map((name, i) => (
          <span
            key={i}
            onClick={() => {
              setGroupA(groupA.filter((item) => item != name));
              setAllCandidates([...allCandidates, name]);
            }}
          >
            {" "}
            {name}
          </span>
        ))}
      </div>
      <div style={{ paddingTop: "10px" }}>
        FIESTA(하빈조) :
        {groupB.map((name, i) => (
          <span
            key={i}
            onClick={() => {
              setGroupB(groupB.filter((item) => item != name));
              setAllCandidates([...allCandidates, name]);
            }}
          >
            {" "}
            {name}
          </span>
        ))}
      </div>
      <div style={{ paddingTop: "10px" }}>
        HARMONY(예지조) :
        {groupC.map((name, i) => (
          <span
            key={i}
            onClick={() => {
              setGroupC(groupC.filter((item) => item != name));
              setAllCandidates([...allCandidates, name]);
            }}
          >
            {" "}
            {name}
          </span>
        ))}
      </div>
      {allCandidates.length > 0 && (
        <Wheel
          spinDuration={0.3}
          startingOptionIndex={Math.floor(Math.random() * data.length)}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={StopSpinning}
          textColors={["#3E3E3E"]}
          backgroundColors={[
            "#FFD8D8",
            "#FAE0D4",
            "#FAF4C0",
            "#CEFBC9",
            "#D9E5FF",
            "#E8D9FF",
            "#FFD9EC",
          ]}
          outerBorderColor="gray"
          outerBorderWidth="1"
          radiusLineColor="gray"
          radiusLineWidth="1"
          textDistance="70"
        />
      )}
    </div>
  );
}
