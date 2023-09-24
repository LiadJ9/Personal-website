import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { isMobileContext } from "../helpers/helpers";

export const Layout = () => {
  const isMobile = useContext(isMobileContext);
  return (
    <>
      <Header isMobile={isMobile} />
      <Outlet />
      <div style={{ display: "flex", flex: 1 }} />
      <Footer />
    </>
  );
};
