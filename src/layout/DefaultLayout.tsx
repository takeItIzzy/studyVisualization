import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({
  component: Component,
  layout: Layout,
  ...rest
}: {
  component: React.ElementType;
  layout: React.ElementType;
  [rest: string]: any;
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <Layout>
            {rest.path === '/modify' ? (
              <Redirect to="/add" />
            ) : (
              <Component {...matchProps} />
            )}
          </Layout>
        );
      }}
    />
  );
};

export default DefaultLayout;
