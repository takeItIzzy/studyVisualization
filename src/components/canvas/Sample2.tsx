import React, { useRef, useEffect, useState } from 'react';

const Sample2 = () => {
  const [data, setData] = useState(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasBox = canvasRef.current;
    const ctx = canvasBox?.getContext('2d');
    if (canvasBox && ctx) {
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
      ctx.moveTo(115, 43);
      ctx.arc(140, 80, 45, Math.PI * 1.3, Math.PI * 0.22, false);
      ctx.moveTo(120, 56);
      ctx.arc(120, 110, 55, Math.PI * 1.5, Math.PI * 0, false);
      ctx.stroke();
    }
  }, [canvasRef.current]);

  return (
    <div className="canvas">
      <canvas width="512" height="512" ref={canvasRef}></canvas>
    </div>
  );
};

export default Sample2;
