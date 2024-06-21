import React, { useEffect, useRef, useState } from "react";
import Piece from "./Piece";
import "../../App.css"; // CSS 파일을 추가하여 스타일을 분리

export default function Map() {
  const [pieces, setPieces] = useState([
    { id: 1, x: 950, y: 600, color: "red" },
    { id: 2, x: 900, y: 600, color: "blue" },
    { id: 3, x: 850, y: 600, color: "green" },
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
        />
      ))}
    </div>
  );
}
