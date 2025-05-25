import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface HomeIconProps {
  color?: string;
  size?: number;
}

const HomeIcon: React.FC<HomeIconProps> = ({ 
  color = "#93EEF3", 
  size = 24 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 34 35" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 9.38184L17 0.881836L0 9.38184V34.9999H34V9.38184ZM23 32.9999H32V10.6179L17 3.1179L2 10.6179V32.9999H11V16.9999H23V32.9999ZM13 32.9999H21V18.9999H13V32.9999Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
