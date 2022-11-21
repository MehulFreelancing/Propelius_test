import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Components/Home";
import ProdDetail from "../../Components/ProdDetail";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} exact={true} element={<Home />} />
        <Route
          path={`/prod-details/:id`}
          exact={true}
          element={<ProdDetail />}
        />
      </Routes>
    </>
  );
};

export default PublicRoutes;
