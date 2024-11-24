import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowBackSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M18.78 10.75L13.22 16l5.56 5.25"
        stroke="#ADADAD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowBackSvg;
