/**
 *
 * Credits to William Candillon, awesome dev and influencer :
 *
 * https://www.youtube.com/watch?v=fMMj9oWbWL8
 *
 *
 */

import {
  Canvas,
  Fill,
  Group,
  useClock,
  useFont,
} from "@shopify/react-native-skia";
import { useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

import Symbol, { COLS, ROWS } from "../components/refinment-wall/symbol";
import AppTheme from "../theme";

const rows = new Array(COLS).fill(0).map((_, i) => i);
const cols = new Array(ROWS).fill(0).map((_, i) => i);

const RefinmentWall = () => {
  const { width, height } = useWindowDimensions();
  const clock = useClock();
  const font = useFont(
    require("../../assets/fonts/VT323-Regular.ttf"),
    height / ROWS,
  );
  const pointer = useSharedValue({ x: width / 2, y: height / 2 });
  const gesture = Gesture.Pan().onChange((e) => (pointer.value = e));
  if (font === null) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <Canvas style={{ flex: 1 }}>
          <Group>
            <Fill color={AppTheme.colors.secondary} />
            {rows.map((_i, i) =>
              cols.map((_j, j) => {
                return (
                  <Symbol
                    key={`${i}-${j}`}
                    i={i}
                    j={j}
                    font={font}
                    pointer={pointer}
                    clock={clock}
                  />
                );
              }),
            )}
          </Group>
        </Canvas>
      </GestureDetector>
    </View>
  );
};

export default RefinmentWall;
