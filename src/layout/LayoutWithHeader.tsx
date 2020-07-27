import React, { ReactNode } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

const path2title: {
  [key: string]: string;
} = {
  '/': 'modules',
  '/canvas': 'canvas',
  '/canvas/sample1': 'sample1',
  '/svg': 'svg',
  '/webgl': 'webgl'
};

const LayoutWithHeader = ({ children }: IProps) => {
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <div className="header">
        <span onClick={() => history.push('/')}>
          {path2title[location.pathname]}
        </span>
      </div>
      <div className="content flex-box">{children}</div>
    </>
  );
};

export default LayoutWithHeader;
