import React from "react";
import "../floatingSVG/floating.css";

export const OrangeTriangle = () => {
  return (
    <svg viewBox="0 0 30 30" class="orange triangle">
      <polygon
        stroke-width="1px"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      ></polygon>
    </svg>
  );
};
