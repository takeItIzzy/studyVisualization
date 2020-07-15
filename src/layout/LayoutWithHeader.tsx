import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const LayoutWithHeader = ({ children }: IProps) => {
  return (
    <div className="bodyWrapper">
      <div>Header</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default LayoutWithHeader;
