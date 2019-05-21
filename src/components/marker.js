import React from "react";
import { Button } from "antd";

function Marker(props) {
  return (
    <div style={{ display: "block", position: "absolute" }}>
      <Button
        style={{
          borderRadius: "18.5px",
          width: "140px",
          height: "34.52px",
          boxShadow:
            "0 0 8px 0 rgba(10,36,99,0.08), 0 1px 2px 0 rgba(10,36,99,0.24)",
          backgroundColor: "#0A2463",
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          justifyContent: "space-around"
        }}
        className="marker-btn"
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "15px"
          }}
        >
          {props.text}
        </span>
      </Button>
    </div>
  );
}

export default Marker;
