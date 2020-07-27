import React, { useRef, useEffect } from 'react';

const Sample1 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasBox = canvasRef.current;
    const ctx = canvasBox?.getContext('2d');
    if (canvasBox && ctx) {
      const rectSize: [number, number] = [100, 100];
      ctx.save(); // save canvas' state, include fillStyle, translate...
      ctx.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]);
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.rect(0.5 * canvasBox.width, 0.5 * canvasBox.height, ...rectSize);
      ctx.fill();
      ctx.restore(); // restore the canvas' state just saved
    }
  }, [canvasRef.current]);

  return (
    <div className="canvas">
      <canvas width="512" height="512" ref={canvasRef}></canvas>
    </div>
  );
};

export default Sample1;
