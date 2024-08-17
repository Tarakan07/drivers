import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CloseSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"
        stroke="#16192E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseSvg;
