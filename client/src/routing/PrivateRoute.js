import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuthAccess } from './Routes';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    const { auth } = useAuthAccess();
    return (
      <Route
        {...rest}
        render={(props) => auth.login === true
          ? <Component {...props} />
          : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    );
};

export default PrivateRoute;