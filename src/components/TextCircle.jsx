import React from "react";

const TextCircle = () => {
  return (
    <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <path
          id="circle"
          d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
        ></path>
      </defs>
      <text width="400">
        <textPath alignment-baseline="top" xlink:href="#circle" class="text">
          Part of a heart-healthy breakfast...sorta! -
        </textPath>
      </text>
    </svg>
  );
};

export default TextCircle;
