import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000", padding: "1px", borderRadius: "3px", zIndex: "2"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000", padding: "1px", borderRadius: "3px", zIndex: "2"  }}
      onClick={onClick}
    />
  );
}

export { SampleNextArrow, SamplePrevArrow };