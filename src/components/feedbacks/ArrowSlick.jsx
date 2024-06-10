import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0152A8", padding: "0.6px", borderRadius: "100%", zIndex: "2"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0152A8", padding: "0.6px", borderRadius: "100%", zIndex: "2"  }}
      onClick={onClick}
    />
  );
}

export { SampleNextArrow, SamplePrevArrow };