import CSS from "csstype";
import { Colors } from "./Colors";

export const HeaderStyle: CSS.Properties = {
  backgroundColor: Colors.BlueGray,
  display: "flex",
  flexDirection: "row",
};

export const LinkStyle: CSS.Properties = {
  textDecoration: "none",
  transition: "opacity 0.2s",
  justifyContent: "center",
};

export const HoveredLink: CSS.Properties = {
  textDecoration: "none",
  transition: "opacity 0.5s",
  opacity: 0.4,
};

export const ParagraphStyle: CSS.Properties = {
  textAlign: "left",
  wordSpacing: "length",
  lineHeight: 1.6,
  fontSize: "large",
  marginBottom: "2vh",
  color: Colors.DarkBrown,
};

export const DropdownLinkStyle: CSS.Properties = {
  display: "block",
  padding: "12px 16px",
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
  marginBottom: "10vh",
  color: Colors.DarkBrown,
  fontSize: "x-large",
};

// HOME STYLES
export const SectionStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
};
export const MobileSectionStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

export const SelfSectionTextStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "2vh",
  color: Colors.SilkCaramel,
  fontSize: "xx-large",
  maxWidth: "45%",
};

export const SelfMobileTextStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  color: Colors.SilkCaramel,
  fontSize: "xx-large",
  maxWidth: "100%",
  textAlign: "center",
};

export const MobileRowsStyle: CSS.Properties = {
  justifyContent: "center",
  alignItems: "center",
  marginRight: "18rem",
};

export const RowsStyle: CSS.Properties = {
  justifyContent: "center",
  alignItems: "center",
  marginRight: "2rem",
};
