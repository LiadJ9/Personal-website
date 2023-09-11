import CSS from "csstype";
import { Colors } from "./Colors";

export const HeaderStyle: CSS.Properties = {
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

export const ParagraphStyle: CSS.Properties = {
  textAlign: "left",
  fontFamily: "Poppins",
  fontSize: "large",
  marginBottom: "2vh",
  color: Colors.DarkBrown,
};

// FOOTER STYLES

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

export const InnerFooterStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  justifyItems: "center",
};

// BLOG STYLES

export const PageStyle: CSS.Properties = {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: Colors.BlueGray,
};

export const OuterBlogpostContainerStyle: CSS.Properties = {
  display: "flex",
  maxWidth: "110vh",
  boxShadow: `5px 7px ${Colors.SilkBrown}`,
  borderRadius: "8px",
  marginBottom: "5vh",
  backgroundColor: Colors.SilkCaramel,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export const InnerBlogpostContainerStyle: CSS.Properties = {
  display: "flex",
  maxWidth: "80%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

// 404 PAGE STYLES

export const Fo_o_Fo_ContainerStyle: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: Colors.SilkCaramel,
  minHeight: "88vh",
};

export const Fo_o_Fo_ErrorStyle: CSS.Properties = {
  fontFamily: "Poppins",
  marginBottom: "10vh",
  color: Colors.DarkBrown,
  fontSize: "x-large",
};
