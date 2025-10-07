import { useEffect, useRef } from "react";

interface Card {
  x: number;
  y: number;
  rotation: number;
  speed: number;
  suit: string;
  value: string;
}

export const FlyingCards = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const suits = ["♠", "♥", "♦", "♣"];
    const values = ["A", "K", "Q", "J", "10"];

    const cards: Card[] = Array.from({ length: 12 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      rotation: Math.random() * 360,
      speed: 0.2 + Math.random() * 0.5,
      suit: suits[Math.floor(Math.random() * suits.length)],
      value: values[Math.floor(Math.random() * values.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cards.forEach((card) => {
        ctx.save();
        ctx.translate(card.x, card.y);
        ctx.rotate((card.rotation * Math.PI) / 180);

        // Draw card
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(-20, -30, 40, 60);
        ctx.strokeStyle = "rgba(138, 43, 226, 0.3)";
        ctx.lineWidth = 2;
        ctx.strokeRect(-20, -30, 40, 60);

        // Draw suit and value
        ctx.fillStyle = card.suit === "♥" || card.suit === "♦" 
          ? "rgba(255, 100, 100, 0.6)" 
          : "rgba(200, 200, 255, 0.6)";
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(card.value, 0, -10);
        ctx.fillText(card.suit, 0, 10);

        ctx.restore();

        // Update position
        card.y -= card.speed;
        card.rotation += 0.5;

        if (card.y < -50) {
          card.y = canvas.height + 50;
          card.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-40"
    />
  );
};
