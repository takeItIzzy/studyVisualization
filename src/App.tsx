import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import LayoutWithHeader from './layout/LayoutWithHeader';

import Modules from './components/Modules';
import Canvas from './components/canvas/index';
import Svg from './components/svg/Svg';
import WebGL from './components/webgl/WebGL';

import CanvasSamp1 from './components/canvas/Sample1';
import CanvasSamp2 from './components/canvas/Sample2';

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
        <Route path="/canvas">
          <Switch>
            <DefaultLayout
              path="/canvas"
              exact
              component={Canvas}
              layout={LayoutWithHeader}
            />
            <DefaultLayout
              exact
              path="/canvas/sample1"
              component={CanvasSamp1}
              layout={LayoutWithHeader}
            />
            <DefaultLayout
              exact
              path="/canvas/sample2"
              component={CanvasSamp2}
              layout={LayoutWithHeader}
            />
          </Switch>
        </Route>
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
