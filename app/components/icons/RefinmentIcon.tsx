import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface RefinmentIconProps {
  color?: string;
  size?: number;
}

const RefinmentIcon: React.FC<RefinmentIconProps> = ({
  color = "#93EEF3",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M17.3529 13.7521V15.1921H21.8649V13.7521H23.3369V12.1361H21.7048V13.5921H17.5129V10.8401H21.8649V9.40005H23.3369V6.36005H21.8649V4.90405H17.3529V6.36005H15.8969V7.96005H17.5129V6.52005H21.7048V9.25605H17.3529V10.6801H15.8969V13.7521H17.3529Z"
        fill={color}
      />
      <Path
        d="M8.15101 27.1921V25.7521H6.69501V24.1361H8.31101V25.5921H12.503V22.8401H8.15101V21.2561H12.503V18.5201H8.31101V19.9601H6.69501V18.3601H8.15101V16.9041H12.663V18.3601H14.135V21.4001H12.663V22.6801H14.135V25.7521H12.663V27.1921H8.15101Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.158 27.1921V24.2961H17.35V21.2561H18.806V19.8001H20.246V18.3601H21.718V16.9041H24.79V27.1921H23.158ZM18.966 22.6801H23.158V18.5201H21.878V19.9601H20.406V21.4001H18.966V22.6801Z"
        fill={color}
      />
      <Path
        d="M11.0441 15.1921V6.52005H9.76413V7.96005H8.14813V6.36005H9.60413V4.90405H11.2041V6.36005H12.6761V15.1921H11.0441Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 32V0H32V32H0ZM2 2H30V30H2V2Z"
        fill={color}
      />
    </Svg>
  );
};

export default RefinmentIcon;
