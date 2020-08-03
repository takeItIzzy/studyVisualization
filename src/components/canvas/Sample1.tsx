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
      ctx.fillRect(0.5 * canvasBox.width, 0.5 * canvasBox.height, ...rectSize);
      ctx.clearRect(
        0.5 * canvasBox.width + 20,
        0.5 * canvasBox.height + 20,
        60,
        60
      );
      ctx.strokeRect(
        0.5 * canvasBox.width + 40,
        0.5 * canvasBox.height + 40,
        20,
        20
      );
      ctx.restore(); // restore the canvas' state just saved
    }
  }, [canvasRef.current]);

  return (
    <div className="canvas">
      <canvas width="512" height="512" ref={canvasRef} />
    </div>
  );
};

export default Sample1;
