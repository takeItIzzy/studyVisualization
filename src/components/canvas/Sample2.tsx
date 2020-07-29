import React, { useRef, useEffect, useState } from 'react';

const dataSource = 'https://s5.ssl.qhres.com/static/b0695e2dd30daa64.json';

const Sample2 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const fetchedData = await (await fetch(dataSource)).json();
      setData(fetchedData);
    })();
  }, []);
  const canvasRef = useRef(null);

  return (
    <div className="canvas">
      <canvas width="512" height="512" ref={canvasRef}></canvas>
    </div>
  );
};

export default Sample2;
