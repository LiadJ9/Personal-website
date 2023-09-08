import React from "react";
import { Colors } from "../styles/Colors";

export const NoPage = () => (
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: Colors.LightCream,
        minHeight: "88vh",
      }}
    >
      <p style={{ fontFamily: "Poppins", marginBottom: "10vh" }}>
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
