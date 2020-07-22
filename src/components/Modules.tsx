import React from 'react';
import { useHistory } from 'react-router-dom';

const modules = [
  {
    id: 0,
    name: 'Canvas'
  },
  {
    id: 1,
    name: 'SVG'
  },
  {
    id: 2,
    name: 'WebGL'
  }
];

const Modules = () => {
  const history = useHistory();
  return (
    <div className="modules flex-box-column">
      {modules.map((module, index) => (
        <div
          className="module flex-box"
          key={module.id}
          onClick={() => history.push(`/${modules[index].name.toLowerCase()}`)}
        >
          <span>{module.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Modules;
