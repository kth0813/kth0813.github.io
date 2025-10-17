import React, { useState, useEffect, Fragment } from "react";

export default function Card() {
  const [cards, setCards] = useState([]);
  const [mainCard, setMainCard] = useState({ id: 999, img: "", flipped: false });
  const [centered, setCentered] = useState(true);
  const allImg = [
    ["card01", "card02", "card03", "card04", "card05", "card06", "card07", "card08", "card09"],
    ["card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18"],
    ["card19", "card20", "card21", "card22", "card23", "card24", "card25", "card26", "card27"],
    ["card28", "card29", "card30", "card31", "card32", "card33", "card34", "card35", "card36"],
    ["card37", "card38", "card39", "card40", "card41", "card42", "card43", "card44", "card45"],
    ["card46", "card47", "card48", "card49", "card50", "card51", "card52"]
  ];

  useEffect(() => {
    const generateRandomImg = () => {
      const shuffledTexts = [];
      const selectedTexts = new Set();
      while (shuffledTexts.length < 8) {
        const newText = allImg.flat()[Math.floor(Math.random() * allImg.flat().length)];
        if (!selectedTexts.has(newText)) {
          selectedTexts.add(newText);
          shuffledTexts.push(newText);
        }
      }

      return shuffledTexts;
    };
    const shuffleCard = () => {
      const texts = generateRandomImg();
      const initialCards = texts.reduce((acc, img) => {
        return [...acc, { id: acc.length, img, flipped: false }];
      }, []);
      const shuffledCards = initialCards.sort(() => Math.random() - 0.5);
      const selectedCards = shuffledCards.slice(0, 8);
      setCards(selectedCards);
    };
    shuffleCard();
    centerCards();
  }, []);

  const ClickCard = (id) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, flipped: !card.flipped } : card)));
    setMainCard((prev) => {
      const card = cards.find((card) => card.id === id);
      if (!card) return prev;
      return { ...card, flipped: !card.flipped };
    });
  };

  const centerCards = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    setCards((prev) => prev.map((card) => ({ ...card, flipped: false })));
    await delay(300);
    setCentered(true);
    await delay(300);
    setCentered(false);
    await delay(100);
    setCentered(true);
    await delay(100);
    setCentered(false);
    await delay(100);
    setCentered(true);
    await delay(300);
    setCentered(false);
  };

  const openAllCards = () => setCards((prev) => prev.map((card) => ({ ...card, flipped: true })));
  const number = (num) => ["4", "8", "3", "7", "2", "6", "1", "5"][num - 1];

  return (
    <div style={{ width: "calc(100vw - 220px)", display: "flex", justifyContent: "center", paddingTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <button onClick={centerCards} className="buttonA">
          카드 섞기
        </button>
        <br />
        <button onClick={openAllCards} className="buttonA">
          모두 보기
        </button>
      </div>

      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card${card.flipped ? " flipped" : ""}`}
          onClick={() => ClickCard(card.id)}
          style={{
            top: centered ? "calc(40% + 50px)" : `calc(${(index % 2) * 50}% + 120px)`,
            right: centered ? "calc(20% + 50px)" : `calc(${Math.floor(index / 2) * 20}% + 50px)`,
            transform: centered ? "translate(-50%, -50%)" : "none"
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
                  fontWeight: "bold"
                }}
              >
                {number(index + 1)}
              </p>
            </div>
            <div className="card-back">
              <div
                className={card.img}
                style={{ borderRadius: "10px", width: "100%", height: 0, paddingBottom: "145.8%" }}
              />
            </div>
          </div>
        </div>
      ))}

      {mainCard.flipped && (
        <Fragment>
          <div className="mainCard">
            <div className="card-inner">
              <div
                className={mainCard.img}
                style={{ borderRadius: "20px", width: "100%", height: 0, paddingBottom: "145.8%" }}
              />
            </div>
          </div>
          <div className="bg" onClick={() => setMainCard({ ...mainCard, flipped: false })} />
        </Fragment>
      )}
    </div>
  );
}
