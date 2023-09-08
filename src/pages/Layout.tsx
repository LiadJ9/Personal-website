import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Linker } from "../components";
import { Header } from "../styles/Styles";

export const Layout = () => {
  return (
    <>
      <div style={Header}>
        <div style={{ flex: 0.1, display: "flex", flexDirection: "row" }}>
          <img width={64} height={64} src={require("../images/doggie.ico")} />
          <Linker style={{ margin: "10%" }} to="/" name="Home" />
          <Linker style={{ margin: "10%" }} to="/Music" name="Music" />
          <Linker style={{ margin: "10%" }} to="/Blog" name="Blog" />
        </div>
      </div>

      <Outlet />
      <div style={{ display: "flex", flex: 1 }} />
      <Footer />
    </>
  );
};
