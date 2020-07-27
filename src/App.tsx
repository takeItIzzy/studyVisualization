import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import LayoutWithHeader from './layout/LayoutWithHeader';

import Modules from './components/Modules';
import Canvas from './components/canvas/index';
import Svg from './components/svg/Svg';
import WebGL from './components/webgl/WebGL';

import CanvasSamp1 from './components/canvas/Sample1';

const App = () => {
  return (
    <Router>
      <Switch>
        <DefaultLayout
          path="/"
          component={Modules}
          layout={LayoutWithHeader}
          exact
        />
        <DefaultLayout
          path="/canvas"
          component={Canvas}
          layout={LayoutWithHeader}
        >
          <DefaultLayout
            path="/canvas/sample1"
            component={CanvasSamp1}
            layout={LayoutWithHeader}
          />
        </DefaultLayout>
        <DefaultLayout path="/svg" component={Svg} layout={LayoutWithHeader} />
        <DefaultLayout
          path="/webgl"
          component={WebGL}
          layout={LayoutWithHeader}
        />
      </Switch>
    </Router>
  );
};

export default App;
