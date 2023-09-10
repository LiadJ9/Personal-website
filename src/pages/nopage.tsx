import React from "react";
import { Fo_o_Fo_ContainerStyle, Fo_o_Fo_ErrorStyle } from "../styles/Styles";

export const NoPage = () => (
  <>
    <div style={Fo_o_Fo_ContainerStyle}>
      <p style={Fo_o_Fo_ErrorStyle}>
        404 Error: Seems like something went wrong
      </p>
      <img
        style={{ borderRadius: 10 }}
        width={300}
        height={450}
        src="https://i.imgur.com/IBJQdKA.jpeg"
        rel="hanging in there"
      />
    </div>
  </>
);
