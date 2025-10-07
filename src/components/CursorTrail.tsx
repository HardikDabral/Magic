import { useEffect, useRef } from "react";

export const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trail = useRef<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new trail point
      trail.current.push({
        x: mousePos.current.x,
        y: mousePos.current.y,
        opacity: 1,
      });

      // Limit trail length
      if (trail.current.length > 20) {
        trail.current.shift();
      }

      // Draw trail
      trail.current.forEach((point, index) => {
        const opacity = point.opacity * (index / trail.current.length);
        const size = 4 * (index / trail.current.length);

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(270, 70%, 60%, ${opacity * 0.6})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(270, 70%, 60%, ${opacity * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        point.opacity *= 0.95;
      });

      // Draw custom cursor
      ctx.beginPath();
      ctx.arc(mousePos.current.x, mousePos.current.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(270, 70%, 60%, 0.8)";
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "hsla(270, 70%, 60%, 0.6)";
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};
