import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../../services/authService";
import { hasPermission } from "./../../utils/permissionChecker";

const ProtectedRoute = ({
  path,
  permission,
  component: Component,
  ...rest
}) => {
  let usr = getUser();
  let requiredPermission = false;
  if (usr) {
    requiredPermission = hasPermission(usr.permissions, permission);
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!usr)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        if (requiredPermission) {
          return <Component {...rest} {...props} />;
        } else
          return (
            <Redirect
              to={{ pathname: "/forbidden", state: { from: props.location } }}
            />
          );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
