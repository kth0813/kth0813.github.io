import React from "react";

const Piece = ({ id, x, y, color, onMouseDown }) => {
  return (
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
};

export default Piece;
