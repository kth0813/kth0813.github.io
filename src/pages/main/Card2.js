import React, { Fragment, useEffect, useState } from "react";
import "../../App.css";
import Roulette from "./Roulette";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [mainCard, setMainCard] = useState({
    id: 999,
    img: "",
    flipped: false,
  });
  const [showRoulette, setShowRoulette] = useState(false);
  const [centered, setCentered] = useState(false);
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
    { name: "김예림", use: "N" },
    { name: "백민우", use: "N" },
    { name: "이하빈", use: "N" },
    { name: "장진영", use: "N" },
    { name: "전솔담", use: "N" },
    { name: "정민성", use: "N" },
    { name: "정회창", use: "N" },
    { name: "김여명", use: "N" },
    { name: "김태훈", use: "N" },
    { name: "이나래", use: "N" },
    { name: "이유나", use: "N" },
    { name: "주예지", use: "N" },
    { name: "김지원", use: "N" },
    { name: "박도희", use: "N" },
    { name: "백민서", use: "N" },
    { name: "이민수", use: "N" },
    { name: "이연우", use: "N" },
    { name: "차영광", use: "N" },
    { name: "김예송", use: "Y" },
    { name: "이명철", use: "N" },
    { name: "김대원", use: "N" },
    { name: "박병호", use: "N" },
    { name: "이진호", use: "N" },
    { name: "김준혁", use: "N" },
    { name: "이찬미", use: "N" },
    { name: "김철 목사님", use: "N" },
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

  const choice = () => setShowRoulette(!showRoulette);
  return (
    <div className="acontainer">
      <div className="left">
        <div className="button-container">
          <button
            onClick={choice}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#3498db",
              color: "#ffffff",
              fontSize: "16px",
              cursor: "pointer",
              margin: "10px 50px",
            }}
          >
            {showRoulette ? "카드 뽑기" : "사람 뽑기"}
          </button>
          <br />
          {!showRoulette && (
            <Fragment>
              <button
                onClick={centerCards}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#3498db",
                  color: "#ffffff",
                  fontSize: "16px",
                  cursor: "pointer",
                  margin: "10px 50px",
                }}
              >
                카드 섞기
              </button>
              <br />
              <button
                onClick={openAllCards}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#3498db",
                  color: "#ffffff",
                  fontSize: "16px",
                  cursor: "pointer",
                  margin: "10px 50px",
                }}
              >
                모두 보기
              </button>
            </Fragment>
          )}
          {showRoulette && (
            <Fragment>
              <div style={{ fontSize: "20px" }}>다음 지목될 사람 후보</div>
              <div
                className="member-list"
                style={{ overflow: "scroll", border: "2px solid" }}
              >
                {allMembers
                  .sort((a, b) => a.use.localeCompare(b.use))
                  .map((member, i) => (
                    <div
                      key={i}
                      className={member.use == "Y" ? "used" : ""}
                      style={{ margin: "5px" }}
                    >
                      {member.name}
                    </div>
                  ))}
              </div>
            </Fragment>
          )}
        </div>
      </div>
      <div className="right">
        {showRoulette ? (
          <div style={{ left: "40%", top: "10%", position: "absolute" }}>
            <Roulette
              member={allMembers
                .filter((member) => member.use == "N")
                .map((member) => {
                  return {
                    ...member,
                    option: member.name,
                    percentage: Math.ceil(
                      100 /
                        allMembers.filter((member) => member.use == "N").length
                    ),
                  };
                })}
            />
          </div>
        ) : (
          <div className="bcontainer">
            <div className="c">
              <div
                className={`cardA${cards[0]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[0].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[0]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d">
              <div
                className={`cardA${cards[1]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[1].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[1]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="e">
              <div
                className={`cardA${cards[2]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[2].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[2]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="f">
              <div
                className={`cardA${cards[3]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[3].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[3]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="g">
              <div
                className={`cardA${cards[4]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[4].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[4]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h">
              <div
                className={`cardA${cards[5]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[5].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[5]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="i">
              <div
                className={`cardA${cards[6]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[6].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[6]?.img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="j">
              <div
                className={`cardA${cards[7]?.flipped ? " flipped" : ""}`}
                onClick={() => ClickCard(cards[7].id)}
              >
                <div className="inner">
                  <div className="back"></div>
                  <div className="front">
                    <div className={"wh " + cards[7]?.img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {mainCard.flipped && (
          <Fragment>
            <div className="mainCard">
              <div className="inner">
                <div className={"wh bsc " + mainCard.img} />
              </div>
            </div>
            <div
              className="bg"
              onClick={() => setMainCard({ ...mainCard, flipped: false })}
            />
          </Fragment>
        )}
      </div>
    </div>
  );
}
