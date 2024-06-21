import React, { useEffect, useRef, useState } from "react";
import Piece from "./Piece";
import "../../App.css"; // CSS 파일을 추가하여 스타일을 분리

export default function Map() {
  const [pieces, setPieces] = useState([
    { id: 1, x: 950, y: 600, color: "red", input: false },
    { id: 2, x: 900, y: 600, color: "blue", input: false },
    { id: 3, x: 850, y: 600, color: "green", input: false },
    { id: 4, x: 800, y: 600, color: "#FFA900", input: false },
    { id: 5, x: 20, y: 20, color: "white", input: true },
    { id: 6, x: 40, y: 20, color: "white", input: true },
    { id: 7, x: 60, y: 20, color: "white", input: true },
    { id: 8, x: 80, y: 20, color: "white", input: true },
    { id: 9, x: 100, y: 20, color: "white", input: true },
    { id: 10, x: 120, y: 20, color: "white", input: true },
    { id: 11, x: 20, y: 40, color: "white", input: true },
    { id: 12, x: 40, y: 40, color: "white", input: true },
    { id: 13, x: 60, y: 40, color: "white", input: true },
    { id: 14, x: 80, y: 40, color: "white", input: true },
    { id: 15, x: 100, y: 40, color: "white", input: true },
    { id: 16, x: 120, y: 40, color: "white", input: true },
    { id: 17, x: 20, y: 60, color: "white", input: true },
    { id: 18, x: 40, y: 60, color: "white", input: true },
    { id: 19, x: 60, y: 60, color: "white", input: true },
    { id: 20, x: 80, y: 60, color: "white", input: true },
    { id: 21, x: 100, y: 60, color: "white", input: true },
    { id: 22, x: 120, y: 60, color: "white", input: true },
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
      {pieces.map((piece) => (
        <Piece
          key={piece.id}
          id={piece.id}
          x={piece.x}
          y={piece.y}
          color={piece.color}
          onMouseDown={handleMouseDown}
          input={piece.input}
        />
      ))}
    </div>
  );
}
