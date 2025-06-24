import AppTheme from "@/app/theme";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const barCount = 16;

type WheelProps = {
  rotation: SharedValue<number>;
  wheelId: string;
};

const Wheel = (props: WheelProps) => {
  const { rotation, wheelId } = props;

  return (
    <View
      style={{ height: 80, justifyContent: "center", alignItems: "center" }}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <Bar key={wheelId + i} index={i} total={barCount} rotation={rotation} />
      ))}
    </View>
  );
};

const Bar = ({
  index,
  total,
  rotation,
}: {
  index: number;
  total: number;
  rotation: SharedValue<number>;
}) => {
  const radius = 30;

  const animatedStyle = useAnimatedStyle(() => {
    const angle = ((2 * Math.PI) / total) * index + rotation.value;
    const y = radius * Math.sin(angle);
    const scale = 0.5 + (0.5 * (Math.cos(angle) + 1)) / 2;
    const opacity = 0.3 + 0.7 * scale;
    const rotateX = `${-30 * Math.sin(angle)}deg`;

    return {
      transform: [{ translateY: y }, { scale }, { rotateX }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 20,
          height: 7,
          borderRadius: 5,
          backgroundColor: AppTheme.colors.primary,
          position: "absolute",
        },
        animatedStyle,
      ]}
    />
  );
};

export default Wheel;
