import style from "./Confetti.module.css"
import React, { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';

const ConfettiCDN = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti(canvasRef.current);

    // emojis
    jsConfetti.addConfetti({
      emojis: ['Feliz', 'Aniversario','🥳','🎈','🎂', '🌸','🎉', '✨'],
      confettiRadius: 6,
      confettiNumber: 15,
      confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ],
    });
  }, []);

  return <canvas ref={canvasRef} id="confetti-cdn" className={style.confettiCanvas}></canvas>;
};

export default ConfettiCDN;