import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface StopIconProps {
  color?: string;
  size?: number;
}

const StopIcon: React.FC<StopIconProps> = ({
  color = "#193F53",
  size = 32,
}) => {
  const scale = size / 36; // Base width = 36 pour le scaling

  return (
    <Svg width={36 * scale} height={32 * scale} viewBox="0 0 36 32" fill="none">
      <Path
        d="M25.5056 3L33.0105 16L25.5056 29H10.4949L2.98901 16L10.4949 3H25.5056Z"
        stroke={color}
        strokeWidth={4}
      />
      <Path
        d="M12 10L18 16M24 22L18 16M18 16L24 10M18 16L12 22"
        stroke={color}
        strokeWidth={4}
      />
    </Svg>
  );
};

export default StopIcon;
