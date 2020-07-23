import React, { useRef, useLayoutEffect } from 'react';
import './canvas.less';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasBox = canvasRef.current;

  useLayoutEffect(() => {
    // const context = canvasBox.getContext('2d');
    console.log(canvasBox);
  });

  return (
    <div className="canvas">
      <canvas width="512" height="512" ref={canvasRef}></canvas>
    </div>
  );
};

export default Canvas;
