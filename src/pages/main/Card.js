import React, { useState, useEffect, Fragment } from "react";
import "../../App.css";
import Roulette from "./Roulette";
export default function Card() {
  const [cards, setCards] = useState([]);
  const [mainCard, setMainCard] = useState({
    id: 999,
    text: "",
    flipped: false,
  });
  const [showRoulette, setShowRoulette] = useState(false);
  const [centered, setCentered] = useState(false);
  const allTexts = [
    "Text1",
    "Text2",
    "Text3",
    "Text4",
    "Text5",
    "Text6",
    "Text7",
    "Text8",
    "Text9",
    "Text10",
    "Text11",
    "Text12",
    "Text13",
    "Text14",
    "Text15",
    "Text16",
    "Text17",
    "Text18",
    "Text19",
    "Text20",
    "Text21",
    "Text22",
    "Text23",
    "Text24",
    "Text25",
    "Text26",
    "Text27",
    "Text28",
    "Text29",
    "Text30",
    "Text31",
    "Text32",
    "Text33",
    "Text34",
    "Text35",
    "Text36",
    "Text37",
    "Text38",
    "Text39",
    "Text40",
    "Text41",
    "Text42",
    "Text43",
    "Text44",
    "Text45",
    "Text46",
    "Text47",
    "Text48",
    "Text49",
    "Text50",
  ];
  const allMembers = [
    { name: "member1", use: "Y" },
    { name: "member2", use: "N" },
    { name: "member3", use: "Y" },
    { name: "member4", use: "N" },
    { name: "member5", use: "N" },
    { name: "member6", use: "N" },
    { name: "member7", use: "N" },
    { name: "member8", use: "N" },
    { name: "member9", use: "N" },
    { name: "member10", use: "N" },
    { name: "member11", use: "N" },
    { name: "member12", use: "N" },
    { name: "member13", use: "N" },
    { name: "member14", use: "N" },
    { name: "member15", use: "N" },
    { name: "member16", use: "N" },
    { name: "member17", use: "N" },
    { name: "member18", use: "N" },
    { name: "member19", use: "N" },
    { name: "member20", use: "N" },
    { name: "member21", use: "N" },
    { name: "member22", use: "N" },
    { name: "member23", use: "N" },
    { name: "member24", use: "N" },
    { name: "member25", use: "N" },
    { name: "member26", use: "N" },
    { name: "member27", use: "N" },
    { name: "member28", use: "N" },
    { name: "member29", use: "N" },
    { name: "member30", use: "N" },
  ];
  useEffect(() => shuffleCard(), []);
  const shuffleCard = () => {
    const texts = generateRandomTexts();
    const initialCards = texts.reduce((accumulator, text) => {
      return [...accumulator, { id: accumulator.length, text, flipped: false }];
    }, []);
    const shuffledCards = initialCards.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledCards.slice(0, 8);
    setCards(selectedCards);
  };
  const generateRandomTexts = () => {
    const shuffledTexts = [];
    const selectedTexts = new Set();

    while (shuffledTexts.length < 8) {
      const randomIndex = Math.floor(Math.random() * allTexts.length);
      const newText = allTexts[randomIndex];
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

  const choice = () => setShowRoulette(!showRoulette);
  return (
    <div>
      <div className="button-container">
        <button onClick={centerCards}>카드 섞기</button>{" "}
        <button onClick={openAllCards}>모두 보기</button>{" "}
        <button onClick={choice}>
          {showRoulette ? "카드 뽑기" : "사람 뽑기"}
        </button>
      </div>
      <div className="member-list" style={{ overflow: "scroll" }}>
        {allMembers
          .sort((a, b) => a.use.localeCompare(b.use))
          .map((member, i) => (
            <div key={i} className={member.use == "Y" ? "used" : ""}>
              {member.name}
            </div>
          ))}
      </div>
      {showRoulette ? (
        <div style={{ left: "40%", top: "10%", position: "absolute" }}>
          <Roulette
            member={allMembers
              .filter((member) => member.use == "N")
              .map((member) => {
                return { ...member, option: member.name, percentage: 100 };
              })}
          />
        </div>
      ) : (
        <div
          className={`card-container ${centered ? "centered" : ""}`}
          style={{ marginLeft: "200px" }}
        >
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
                <div className="card-front"></div>
                <div className="card-back">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {mainCard.flipped && (
        <Fragment>
          <div className="mainCard">
            <div className="card-inner">
              <div className="">{mainCard.text}</div>
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
