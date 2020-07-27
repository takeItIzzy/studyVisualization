import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const DefaultLayout = ({
  component: Component,
  layout: Layout,
  path,
  children,
  ...rest
}: {
  component: React.ElementType;
  layout: React.ElementType;
  path: string;
  children?: React.ReactNode;
  [rest: string]: any;
}) => {
  return (
    <Route
      path={path}
      render={(matchProps) => {
        return (
          <>
            <Layout>
              <Component {...matchProps} />
            </Layout>
            {children}
          </>
        );
      }}
    />
  );
};

export default DefaultLayout;
