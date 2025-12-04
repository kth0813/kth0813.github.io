import React from "react";
import "../styles.css";

const Snow = () => {
  // 개수를 150개로 늘림
  const snowflakes = Array.from({ length: 150 });

  return (
    <div className="snow-container">
      {snowflakes.map((_, index) => {
        // 크기를 3px ~ 13px 사이로 아주 다양하게 설정
        const size = Math.random() * 12 + 1;

        const style = {
          left: `${Math.random() * 100}vw`,
          // 크기에 따라 떨어지는 속도를 다르게 주면 더 원근감이 생김
          // 큰 눈(무거운 눈)은 조금 더 빨리, 작은 눈은 천천히
          animationDuration: `${Math.random() * 8 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.7 + 0.3, // 투명도도 다양하게
          width: `${size}px`,
          height: `${size}px`,
          // (선택사항) 큰 눈송이에 살짝 블러 효과를 주면 더 몽환적임
          filter: size > 10 ? "blur(1px)" : "none"
        };

        return <div key={index} className="snowflake" style={style} />;
      })}
    </div>
  );
};

export default Snow;
