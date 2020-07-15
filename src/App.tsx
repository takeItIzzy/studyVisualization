import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import LayoutWithHeader from './layout/LayoutWithHeader';
import Modules from './components/Modules';

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
      </Switch>
    </Router>
  );
};

export default App;
