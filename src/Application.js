import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes/public.routes";
import PrivateRoutes from "./routes/privateRoutes/private.routes";
import AuthGuard from "./routes/Guards/AuthGuard";
import NoGuard from "./routes/Guards/NoGuard";
//import { connect } from "react-redux";
// import LoaderComponent from "./component/LoaderCompoent/LoaderCompoent";

export default function Application() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path={`/*`}
          element={
            <NoGuard>
              <PublicRoutes />
            </NoGuard>
          }
        />
      </Routes>
    </React.Fragment>
  );
}
