import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
}

export const SmokeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        size: 50 + Math.random() * 100,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: -0.5 - Math.random() * 0.5,
        opacity: 0.3 + Math.random() * 0.2,
        fadeSpeed: 0.001 + Math.random() * 0.002,
      };
    };

    for (let i = 0; i < 15; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size
        );
        gradient.addColorStop(0, `rgba(138, 43, 226, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 50, 150, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size += 0.2;
        particle.opacity -= particle.fadeSpeed;

        if (particle.opacity <= 0 || particle.y < -particle.size) {
          particles[index] = createParticle();
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
      className="fixed inset-0 pointer-events-none z-5 opacity-30"
    />
  );
};
