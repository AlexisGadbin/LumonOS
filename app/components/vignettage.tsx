import {
  BlurMask,
  Canvas,
  Group,
  Mask,
  Oval,
  Rect,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const Vignettage = () => {
  const { width, height } = Dimensions.get("screen");

  //Valeurs calculées du Figma pour une cohérence entre appareils
  const widthElipsis1Ratio = 384 / 436;
  const heightElipsis1Ratio = 1582 / 948;
  const widthElipsis2Ratio = 1336 / 436;
  const heightElipsis2Ratio = 679 / 948;

  const widthElipsis1 = width * widthElipsis1Ratio;
  const heightElipsis1 = height * heightElipsis1Ratio;
  const widthElipsis2 = width * widthElipsis2Ratio;
  const heightElipsis2 = height * heightElipsis2Ratio;

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      pointerEvents: "none",
      zIndex: 99,
      transform: [{ scale: 1.1 }],
    },
  });

  return (
    <Canvas style={styles.container}>
      <Group>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Rect x={0} y={0} width={width} height={height} color="white" />
              <Oval
                x={width / 2 - widthElipsis1 / 2}
                y={height / 2 - heightElipsis1 / 2}
                width={widthElipsis1}
                height={heightElipsis1}
                color="black"
              />
            </Group>
          }
        >
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Rect x={0} y={0} width={width} height={height} color="white" />
                <Oval
                  x={width / 2 - widthElipsis2 / 2}
                  y={height / 2 - heightElipsis2 / 2}
                  width={widthElipsis2}
                  height={heightElipsis2}
                  color="black"
                />
              </Group>
            }
          >
            <BlurMask blur={24} style="inner" />
            <Rect x={0} y={0} width={width} height={height} color="lightblue" />
          </Mask>
        </Mask>

        <Mask
          mode="luminance"
          mask={
            <Group>
              <BlurMask blur={16} style="normal" />
              <Rect x={0} y={0} width={width} height={height} color="white" />
              <Oval
                x={width / 2 - widthElipsis1 / 2}
                y={height / 2 - heightElipsis1 / 2}
                width={widthElipsis1}
                height={heightElipsis1}
                color="black"
              />
            </Group>
          }
        >
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Oval
                  x={width / 2 - widthElipsis2 / 2}
                  y={height / 2 - heightElipsis2 / 2}
                  width={widthElipsis2}
                  height={heightElipsis2}
                  color="white"
                />
              </Group>
            }
          >
            <Rect x={0} y={0} width={width} height={height} color="lightblue" />
          </Mask>
        </Mask>

        <Mask
          mode="luminance"
          mask={
            <Group>
              <BlurMask blur={24} style="normal" />
              <Rect x={0} y={0} width={width} height={height} color="white" />
              <Oval
                x={width / 2 - widthElipsis2 / 2}
                y={height / 2 - heightElipsis2 / 2}
                width={widthElipsis2}
                height={heightElipsis2}
                color="black"
              />
            </Group>
          }
        >
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Oval
                  x={width / 2 - widthElipsis1 / 2}
                  y={height / 2 - heightElipsis1 / 2}
                  width={widthElipsis1}
                  height={heightElipsis1}
                  color="white"
                />
              </Group>
            }
          >
            <Rect x={0} y={0} width={width} height={height} color="lightblue" />
          </Mask>
        </Mask>
      </Group>
    </Canvas>
  );
};

export default Vignettage;
