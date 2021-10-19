import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  const { userData, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
