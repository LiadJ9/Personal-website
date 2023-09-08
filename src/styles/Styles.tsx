import CSS from "csstype";
import { Colors } from "./Colors";

export const Header: CSS.Properties = {
  backgroundColor: Colors.BlueGray,
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
};

export const LinkStyle: CSS.Properties = {
  textDecoration: "none",
  color: Colors.Cream,
  transition: "opacity 0.2s",
  fontFamily: "Poppins",
};

export const HoveredLink: CSS.Properties = {
  textDecoration: "none",
  color: Colors.Cream,
  transition: "opacity 0.5s",
  opacity: 0.4,
  fontFamily: "Poppins",
};

export const FooterStyle: CSS.Properties = {
  backgroundColor: Colors.BlueGray,
  position: "sticky",
  bottom: "0",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
};
