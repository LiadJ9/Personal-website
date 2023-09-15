import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <div style={{ display: "flex", flex: 1 }} />
    <Footer />
  </>
);
