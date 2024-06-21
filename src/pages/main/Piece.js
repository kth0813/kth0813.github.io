import React from "react";

export default function Piece({ id, x, y, color, onMouseDown, input }) {
  return input ? (
    <input
      onMouseDown={() => onMouseDown(id)}
      className="gameInput"
      type="text"
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  ) : (
    <div
      onMouseDown={() => onMouseDown(id)}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: color,
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      }}
    ></div>
  );
}
