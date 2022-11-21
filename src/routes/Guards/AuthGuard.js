import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function AuthGuard({ children }) {

  const auth = useSelector((state) => state?.user?.userData?.data?.accessToken);

  var isAuthenticated = false;
  if (auth != null || auth != undefined) {
    isAuthenticated = true;
  }
  return isAuthenticated ? children : <Navigate to={`/`} />;
}

export default AuthGuard;
