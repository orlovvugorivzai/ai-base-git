"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;
    const spacing = 12; // Відстань між квадратиками

    const draw = () => {
      // Зафарбовуємо фон чорним для чистоти кадру
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = "#ffffff";
      
      const waveAmplitude = height * 0.25;
      const waveFrequency = 0.003;
      const waveThickness = 120; // Товщина смуги хвиль

      for (let x = 0; x < width; x += spacing) {
        // Додаємо кілька складових синусоїди для більш "природного" та хаотичного вигляду
        const waveCenterY = 
          height / 2 + 
          Math.sin(x * waveFrequency + time) * waveAmplitude + 
          Math.sin(x * waveFrequency * 2 - time * 1.5) * (waveAmplitude * 0.3);
        
        for (let y = 0; y < height; y += spacing) {
          const dist = Math.abs(y - waveCenterY);
          
          if (dist < waveThickness) {
            // Створюємо "шум" (Noise) - чим ближче до центру хвилі, тим більша ймовірність появи квадратика
            const probability = 1 - (dist / waveThickness);
            
            if (Math.random() < probability * probability) {
               const size = spacing * 0.4 * (Math.random() * 0.5 + 0.5); // Різний розмір пікселів
               
               // Яскравість залежить від близькості до центру
               ctx.globalAlpha = probability * 0.8;
               ctx.fillRect(x - size/2, y - size/2, size, size);
            }
          }
        }
      }
      
      ctx.globalAlpha = 1.0;
      time += 0.015;
      requestAnimationFrame(draw);
    };

    let animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
