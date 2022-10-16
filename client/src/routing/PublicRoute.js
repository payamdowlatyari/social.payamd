import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuthAccess } from './Routes';


const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
    const { auth } = useAuthAccess();
return (
    <Route
      {...rest}
      render={(props) => auth.login === false
        ? <Component {...props} />
        : <Navigate to='/' />}
    />
  )
};

export default PublicRoute;