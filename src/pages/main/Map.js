import React, { useEffect, useRef, useState } from "react";
import Piece from "./Piece";
import "../../App.css"; // CSS 파일을 추가하여 스타일을 분리

export default function Map() {
  const [pieces, setPieces] = useState([
    { id: 1, x: 950, y: 600, color: "red" },
    { id: 2, x: 900, y: 600, color: "blue" },
    { id: 3, x: 850, y: 600, color: "green" },
    { id: 4, x: 800, y: 600, color: "#FFA900" },
  ]);
  const [draggingPiece, setDraggingPiece] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (draggingPiece !== null) {
        const rect = mapRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPieces((prevPieces) =>
          prevPieces.map((piece) =>
            piece.id === draggingPiece ? { ...piece, x, y } : piece
          )
        );
      }
    };

    const handleMouseUp = () => {
      setDraggingPiece(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingPiece]);

  const handleMouseDown = (id) => {
    setDraggingPiece(id);
  };

  return (
    <div ref={mapRef} className="map-container">
      {/* 턴수 */}
      <input
        className="gameInput"
        type="text"
        style={{ left: "580px", top: "39px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "545px", top: "39px" }}
      />
      {/* 초록팀 */}
      <input
        className="gameInput"
        type="text"
        style={{ left: "175px", top: "50px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "250px", top: "50px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "325px", top: "50px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "96px", top: "90px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "130px", top: "90px" }}
      />
      {/* 빨강팀 */}
      <input
        className="gameInput"
        type="text"
        style={{ left: "175px", top: "645px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "250px", top: "645px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "325px", top: "645px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "103px", top: "670px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "141px", top: "670px" }}
      />
      {/* 파랑팀 */}
      <input
        className="gameInput"
        type="text"
        style={{ left: "665px", top: "645px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "735px", top: "645px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "815px", top: "645px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "603px", top: "670px" }}
      />
      <input
        className="gameInput"
        type="text"
        style={{ left: "643px", top: "670px" }}
      />
      {pieces.map((piece) => (
        <Piece
          key={piece.id}
          id={piece.id}
          x={piece.x}
          y={piece.y}
          color={piece.color}
          onMouseDown={handleMouseDown}
        />
      ))}
    </div>
  );
}
