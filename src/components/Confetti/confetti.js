

import React, { useEffect, useRef } from 'react';


const Confetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    //const context = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createConfetti = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
      
        const confettiList = [];
      
        const createSingleConfetti = () => {
          const x = Math.random() * canvas.width;  // Posição horizontal aleatória
          const y = -10;  // Começar acima da tela
          const angle = Math.random() * 2 * Math.PI;  // Ângulo de movimento aleatório
          const speed = Math.random() * 2 + 1;  // Velocidade aleatória
          const color = '#' + Math.floor(Math.random() * 16777215).toString(20);  // Cor aleatória
      
          confettiList.push({ x, y, angle, speed, color });
        };
      
        // Crie uma quantidade inicial de confetes
        for (let i = 0; i < 300; i++) {
          createSingleConfetti();
        }

        const updateConfetti = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);  // Limpar o canvas
        
            confettiList.forEach((confetti) => {
              const { x, y, angle, speed, color } = confetti;
        
              const dx = Math.sin(angle) * speed;
              const dy = Math.cos(angle) * speed;
              confetti.x += dx;
              confetti.y += dy + 0.5;  // Adicionar um pouco de gravidade
        
              context.beginPath();
              context.arc(x, y, 5, 0, 2 * Math.PI);
              context.fillStyle = color;
              context.fill();
        
              // Verificar se o confete saiu da tela
              if (confetti.y < canvas.height) {
                return;  // Continuar animando
              }
        
              // Reiniciar a posição do confete
              confetti.x = Math.random() * canvas.width;
              confetti.y = -10;
              confetti.angle = Math.random() * 2 * Math.PI;
              confetti.speed = Math.random() * 2 + 1;
              confetti.color = '#' + Math.floor(Math.random() * 16777215).toString(20);
            });
        
            requestAnimationFrame(updateConfetti);
          };
        
          updateConfetti();
        };

    const startConfetti = () => {
      resizeCanvas();
      createConfetti();

      const animate = () => {
       
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    };

    startConfetti();

    return () => {
      cancelAnimationFrame(animationFrameId);

    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas"/> ;
};

export default Confetti;