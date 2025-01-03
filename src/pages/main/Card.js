import React, { useState, useEffect, Fragment } from "react";
import "../../App.css";
import Roulette from "./Roulette";
import Roulette2 from "./Roulette2";
import Map from "./Map";

export default function Card() {
  const [cards, setCards] = useState([]);
  const [mainCard, setMainCard] = useState({
    id: 999,
    img: "",
    flipped: false,
  });
  const [showRoulette, setShowRoulette] = useState(false);
  const [showRoulette2, setShowRoulette2] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [centered, setCentered] = useState(true);
  const [start, setStart] = useState(false);
  const allImg = [
    "card01",
    "card02",
    "card03",
    "card04",
    "card05",
    "card06",
    "card07",
    "card08",
    "card09",
    "card10",
    "card11",
    "card12",
    "card13",
    "card14",
    "card15",
    "card16",
    "card17",
    "card18",
    "card19",
    "card20",
    "card21",
    "card22",
    "card23",
    "card24",
    "card25",
    "card26",
    "card27",
    "card28",
    "card29",
    "card30",
    "card31",
    "card32",
    "card33",
    "card34",
    "card35",
    "card36",
    "card37",
    "card38",
    "card39",
    "card40",
    "card41",
    "card42",
    "card43",
    "card44",
    "card45",
    "card46",
    "card47",
    "card48",
    "card49",
    "card50",
    "card51",
    "card52",
  ];

  const allMembers = [
    { name: "권유담", use: "N" },
    { name: "김광은", use: "N" },
    { name: "김다인", use: "Y" },
    { name: "김민지", use: "Y" },
    { name: "김대원", use: "Y" },
    { name: "김예림", use: "Y" },
    { name: "김예송", use: "Y" },
    { name: "김여명", use: "Y" },
    { name: "김용빈", use: "Y" },
    { name: "김주원", use: "Y" },
    { name: "김지원", use: "Y" },
    { name: "김지주", use: "Y" },
    { name: "김진명", use: "Y" },
    { name: "김태훈", use: "Y" },
    { name: "박도희", use: "Y" },
    { name: "박병호", use: "Y" },
    { name: "박윤걸", use: "Y" },
    { name: "백민서", use: "Y" },
    { name: "백민우", use: "Y" },
    { name: "백하영", use: "Y" },
    { name: "서봉규", use: "Y" },
    { name: "신지원", use: "Y" },
    { name: "오송현", use: "Y" },
    { name: "유연호", use: "Y" },
    { name: "유리", use: "N" },
    { name: "이나래", use: "Y" },
    { name: "이명철", use: "Y" },
    { name: "이민수", use: "Y" },
    { name: "이연우", use: "Y" },
    { name: "이유나", use: "N" },
    { name: "이지우", use: "Y" },
    { name: "이진호", use: "Y" },
    { name: "이찬미", use: "Y" },
    { name: "이하빈", use: "Y" },
    { name: "장진영", use: "Y" },
    { name: "정회창", use: "Y" },
    { name: "전솔담", use: "Y" },
    { name: "주예지", use: "Y" },
    { name: "차영광", use: "Y" },
    { name: "최소민", use: "N" },
    { name: "최혜원", use: "Y" },
    { name: "한예지", use: "Y" },
    { name: "박순성 집사님", use: "N" },
  ];
  useEffect(() => shuffleCard(), []);
  const shuffleCard = () => {
    const texts = generateRandomImg();
    const initialCards = texts.reduce((accumulator, img) => {
      return [...accumulator, { id: accumulator.length, img, flipped: false }];
    }, []);
    const shuffledCards = initialCards.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledCards.slice(0, 8);
    setCards(selectedCards);
  };
  const generateRandomImg = () => {
    const shuffledTexts = [];
    const selectedTexts = new Set();

    while (shuffledTexts.length < 8) {
      const randomIndex = Math.floor(Math.random() * allImg.length);
      const newText = allImg[randomIndex];
      if (!selectedTexts.has(newText)) {
        selectedTexts.add(newText);
        shuffledTexts.push(newText);
      }
    }

    return shuffledTexts;
  };

  const ClickCard = (id) => {
    setCards(
      cards.map((card) =>
        card.id == id ? { ...card, flipped: !card.flipped } : card
      )
    );
    setMainCard({
      ...cards.find((card) => card.id == id),
      flipped: !cards.find((card) => card.id == id).flipped,
    });
  };

  const centerCards = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    setCards(
      cards.map((card) => {
        return { ...card, flipped: false };
      })
    );
    await delay(300);
    setCentered(true);
    await delay(300);
    shuffleCard();
    await delay(300);
    setCentered(false);
  };

  const openAllCards = () => {
    setCards(
      cards.map((card) => {
        return { ...card, flipped: true };
      })
    );
  };

  const number = (num) => {
    if (num == 1) return "4";
    if (num == 2) return "8";
    if (num == 3) return "3";
    if (num == 4) return "7";
    if (num == 5) return "2";
    if (num == 6) return "6";
    if (num == 7) return "1";
    if (num == 8) return "5";
  };
  const choice = () => setShowRoulette(!showRoulette);

  return (
    <div className="twoFlex" style={{ backgroundColor: "#F7F7F7" }}>
      {start && (
        <div className="button-container">
          {!showRoulette2 && !showMap && (
            <button onClick={choice} className="buttonA">
              {showRoulette ? "카드 뽑기" : "사람 뽑기"}
            </button>
          )}
          <br />
          {!showRoulette2 && !showMap && !showRoulette && (
            <Fragment>
              <button onClick={centerCards} className="buttonA">
                카드 섞기
              </button>
              <br />
              <button onClick={openAllCards} className="buttonA">
                모두 보기
              </button>
            </Fragment>
          )}
          <button
            onClick={() => {
              setShowRoulette(false);
              setShowRoulette2(!showRoulette2);
              setShowMap(false);
            }}
            className="buttonA"
          >
            {showRoulette2 ? "돌아가기" : "조편성"}
          </button>
          <button
            onClick={() => {
              setShowRoulette(false);
              setShowRoulette2(false);
              setShowMap(!showMap);
            }}
            className="buttonA"
          >
            {showMap ? "돌아가기" : "게임"}
          </button>
          {showRoulette && (
            <Fragment>
              <div
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                다음 지목될 사람 후보
              </div>
              <div
                className="member-list"
                style={{
                  overflow: "scroll",
                  border: "2px solid",
                  borderRadius: "10px",
                }}
              >
                {allMembers
                  .sort((a, b) => a.use.localeCompare(b.use))
                  .map((member, i) => (
                    <div
                      key={i}
                      className={member.use == "Y" ? "used" : ""}
                      style={{ margin: "5px", textAlign: "center" }}
                    >
                      {member.name}
                    </div>
                  ))}
              </div>
            </Fragment>
          )}
        </div>
      )}
      {showRoulette2 ? (
        <div style={{ left: "40%", top: "5vh", position: "absolute" }}>
          <Roulette2 />
        </div>
      ) : showRoulette ? (
        <div style={{ left: "40%", top: "5vh", position: "absolute" }}>
          <Roulette
            member={allMembers
              .filter((member) => member.use != "Y")
              .map((member) => {
                return {
                  ...member,
                  option: member.name,
                  percentage: Math.ceil(
                    100 /
                      allMembers.filter((member) => member.use != "Y").length
                  ),
                };
              })}
          />
        </div>
      ) : showMap ? (
        <div style={{ left: "20%", top: "5vh", position: "absolute" }}>
          <Map />
        </div>
      ) : start ? (
        <div className={`card-container`}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card${card.flipped ? " flipped" : ""}`}
              onClick={() => ClickCard(card.id)}
              style={{
                top: centered
                  ? "calc(40% + 50px)"
                  : `calc(${(index % 2) * 50}% + 50px)`,
                right: centered
                  ? "calc(20% + 50px)"
                  : `calc(${Math.floor(index / 2) * 20}% + 50px)`,
                transform: centered ? "translate(-50%, -50%)" : "none",
              }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <p
                    style={{
                      fontSize: "21px",
                      backgroundColor: "dimgray",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      margin: 0,
                      textAlign: "center",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {number(index + 1)}
                  </p>
                </div>
                <div className="card-back">
                  <div
                    className={card.img}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: 0,
                      paddingBottom: "145.8%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Fragment>
          <div
            style={{
              zIndex: 100,
              top: "50%",
              right: "50%",
              position: "absolute",
            }}
          >
            <button
              onClick={() => {
                setStart(true);
                centerCards();
              }}
              className="buttonB"
            >
              시작하기
            </button>
          </div>
          <div className="bg" />
        </Fragment>
      )}
      {mainCard.flipped && (
        <Fragment>
          <div className="mainCard">
            <div className="card-inner">
              <div
                className={mainCard.img}
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  height: 0,
                  paddingBottom: "145.8%",
                }}
              />
            </div>
          </div>
          <div
            className="bg"
            onClick={() => {
              setMainCard({ ...mainCard, flipped: false });
            }}
          />
        </Fragment>
      )}
    </div>
  );
}
