import AppTheme from "@/app/theme";
import { Message } from "@/utils/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  message: Message;
};

const MessageRow = (props: Props) => {
  const { message } = props;

  const getAuthorImage = (authorName: string) => {
    switch (authorName) {
      case "Mr. Milchick":
        return require("../../../assets/images/avatars/mr-milchick.png");
      case "Mark S.":
        return require("../../../assets/images/avatars/mark-s.png");
      case "Helly R.":
        return require("../../../assets/images/avatars/helly-r.png");
      case "Dylan G.":
        return require("../../../assets/images/avatars/dylan-g.png");
      case "Dylan F.":
        return require("../../../assets/images/avatars/dylan-f.png");
      case "Ms. Casey":
        return require("../../../assets/images/avatars/ms-casey.png");
      default:
        return require("../../../assets/images/avatars/mr-milchick.png");
    }
  };

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    messageContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%",
      flexShrink: 1,
    },
    author: {
      fontFamily: "VT323",
      fontSize: 24,
      color: message.isRead
        ? AppTheme.colors.primary
        : AppTheme.colors.secondary,
      backgroundColor: message.isRead ? "none" : AppTheme.colors.primary,
      alignSelf: "flex-start",
      maxWidth: "100%",
      flexShrink: 1,
      paddingHorizontal: 16,
      marginLeft: -16,
    },
    content: {
      fontFamily: "VT323",
      fontSize: 20,
      color: AppTheme.colors.primary,
      opacity: 0.6,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    image: {
      width: 80,
      height: 80,
      borderColor: AppTheme.colors.primary,
      borderWidth: message.isRead ? 0 : 2,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={getAuthorImage(message.author)} style={styles.image} />
      <View style={styles.messageContainer}>
        <Text style={styles.author}>{message.author}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {message.content}
        </Text>
      </View>
    </View>
  );
};

export default MessageRow;
