import React, { useEffect, useState } from "react";
import "./Confetti.css";
import c1 from "../img/confetti/confetti1.png";
import c2 from "../img/confetti/confetti2.png";
import c3 from "../img/confetti/confetti3.png";
import c4 from "../img/confetti/confetti4.png";

const IMAGES = [c1, c2, c3, c4];
const PARTICLE_COUNT = 16; // 총 입자 수

const Confetti = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      return {
        id: i,
        image: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        left: Math.random() * 100, // 좌우분포
        delay: Math.random() * 8, // 시작 시간 분포
        duration: 1 + Math.random() * 10, // 떨어지는 속도
        swayDuration: 2 + Math.random() * 3, // 흔들리는 속도
        scale: 0.4 + Math.random() * 1.4 // 사이즈
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="confetti-container">
      {particles.map((p) => (
        <img
          key={p.id}
          src={p.image}
          className="confetti-particle"
          style={{
            left: `${p.left}vw`,
            animationDelay: `${p.delay}s, -${Math.random() * 2}s`,
            animationDuration: `${p.duration}s, ${p.swayDuration}s`,
            "--scale": p.scale
          }}
          alt=""
        />
      ))}
    </div>
  );
};

export default Confetti;
