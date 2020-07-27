import React from 'react';
import { Link } from 'react-router-dom';

const Canvas = ({ children }: { children: React.ReactNode }) => {
  // console.log(children);
  return (
    <>
      <Link to="/canvas/sample1">sample1</Link>
    </>
  );
};

export default Canvas;
