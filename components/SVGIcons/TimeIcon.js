

import React from "react";
import { Icon, Center, Box } from "native-base";
import { Path, G, ClipPath, Rect, Circle, Svg } from "react-native-svg";

const TimeIcon = props => {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7 0C3.13306 0 0 3.13306 0 7C0 10.8669 3.13306 14 7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0ZM8.61169 9.88186L6.12218 8.07258C6.03468 8.00766 5.98387 7.90605 5.98387 7.79879V3.04839C5.98387 2.8621 6.13629 2.70968 6.32258 2.70968H7.67742C7.86371 2.70968 8.01613 2.8621 8.01613 3.04839V6.93508L9.80847 8.23911C9.96089 8.34919 9.99194 8.56089 9.88186 8.71331L9.08589 9.80847C8.97581 9.95806 8.76411 9.99194 8.61169 9.88186Z"
        fill="#D2BAF5"
      />
    </Svg>
  );
};

export default TimeIcon;