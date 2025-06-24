import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface MessageIconProps {
  color?: string;
  size?: number;
}

const MessageIcon: React.FC<MessageIconProps> = ({
  color = "#93EEF3",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 17.4142L2 3.41421V30H30V3.41421L16 17.4142ZM32 32H0V0H32V32ZM28.5858 2H3.41421L16 14.5858L28.5858 2Z"
        fill={color}
      />
    </Svg>
  );
};

export default MessageIcon;
