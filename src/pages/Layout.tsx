import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

interface LayoutProps {
  isMobile: boolean
}

export const Layout = ({isMobile}: LayoutProps) => (
  <>
    <Header isMobile={isMobile}/>
    <Outlet />
    <div style={{ display: "flex", flex: 1 }} />
    <Footer />
  </>
);
