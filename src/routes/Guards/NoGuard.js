/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function NoGuard({ children }) {

  const auth = useSelector((state) => state?.user?.userData?.data?.accessToken);

  var isAuthenticated = false;
  if (auth != null || auth != undefined) {
    isAuthenticated = true;
  }
  return isAuthenticated ?  <Navigate to={`/auth/profile`} /> : children;
}

export default NoGuard;
