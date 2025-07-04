import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface RewardIconProps {
  color?: string;
  size?: number;
}

const RewardIcon: React.FC<RewardIconProps> = ({
  color = "#93EEF3",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 24.9552C22.6065 24.4499 27 19.738 27 14V13.9228C29.7694 13.4921 32 11.3033 32 8.5C32 5.69669 29.7694 3.50794 27 3.07718V0H5V3.07718C2.23059 3.50794 0 5.69669 0 8.5C0 11.3033 2.23059 13.4921 5 13.9228V14C5 19.738 9.3935 24.4499 15 24.9552V30H10.5V32H21.5V30H17V24.9552ZM7 2H25V14C25 18.9706 20.9706 23 16 23C11.0294 23 7 18.9706 7 14V2ZM27 5.10852V11.8915C28.7822 11.494 30 10.0594 30 8.5C30 6.94063 28.7822 5.50599 27 5.10852ZM2 8.5C2 6.94063 3.21782 5.50599 5 5.10852V11.8915C3.21782 11.494 2 10.0594 2 8.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default RewardIcon;
