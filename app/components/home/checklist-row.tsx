import AppTheme from "@/app/theme";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  text: string;
};

const ChecklistRow = (props: Props) => {
  const { text } = props;
  const [checked, setChecked] = useState(false);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
      opacity: checked ? 0.5 : 1,
      maxWidth: "100%",
    },
    box: {
      width: 16,
      height: 16,
      borderWidth: 2,
      borderBottomWidth: checked ? 2 : 4,
      borderColor: AppTheme.colors.primary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    checkmark: {
      color: AppTheme.colors.primary,
      fontSize: 8,
      lineHeight: 8,
      fontWeight: "black",
      textAlign: "center",
    },
    text: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.primary,
    },
  });

  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <View style={styles.container}>
        <View style={styles.box}>
          {checked && <Text style={styles.checkmark}>✕</Text>}
        </View>
        <Text
          style={[
            styles.text,
            checked && { textDecorationLine: "line-through" },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChecklistRow;
