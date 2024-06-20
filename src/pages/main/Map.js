import React, { useState } from "react";
import Piece from "./Piece";
import "../../App.css"; // CSS 파일을 추가하여 스타일을 분리

const Map = () => {
  const [pieces, setPieces] = useState([
    { id: 1, x: 950, y: 600, color: "red" },
    { id: 2, x: 900, y: 600, color: "blue" },
    { id: 3, x: 850, y: 600, color: "green" },
  ]);
  const [draggingPiece, setDraggingPiece] = useState(null);

  const handleMouseDown = (id) => {
    setDraggingPiece(id);
  };

  const handleMouseUp = () => {
    setDraggingPiece(null);
  };

  const handleMouseMove = (e) => {
    if (draggingPiece !== null) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPieces((prevPieces) =>
        prevPieces.map((piece) =>
          piece.id === draggingPiece ? { ...piece, x, y } : piece
        )
      );
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="map-container" // 클래스명으로 스타일 적용
    >
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
};

export default Map;
