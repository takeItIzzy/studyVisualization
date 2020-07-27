import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const DefaultLayout = ({
  component: Component,
  layout: Layout,
  children,
  ...rest
}: {
  component: React.ElementType;
  layout: React.ElementType;
  children?: React.ReactNode;
  [rest: string]: any;
}) => {
  return (
    <Route
      render={(matchProps) => {
        return (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

export default DefaultLayout;
