import { Message } from "@/utils/types";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/footer";
import MessageRow from "../components/message/message-row";
import AppTheme from "../theme";

const messages: Message[] = [
  {
    id: "1",
    author: "Mr. Milchick",
    content: "The work is mysterious and important Basti U. Meet me in the break room now.",
    isRead: false,
  },
  {
    id: "2",
    author: "Mark S.",
    content: "Hey Basti U. have you seen Mrs. Cobel today?",
    isRead: true,
  },
  {
    id: "3",
    author: "Helly R.",
    content: "Do you want to go to the Music Dance Experience with me tonight?",
    isRead: true,
  },
  {
    id: "4",
    author: "Dylan G.",
    content: "Hope to see you at the melon party Basti U.!",
    isRead: true,
  },
  {
    id: "5",
    author: "Dylan F.",
    content: "I assume that I am your favorite Dylan at work, isn’t it?",
    isRead: true,
  },
  {
    id: "6",
    author: "Ms. Casey",
    content: "You’re Outie can design 100 buttons in 100 minutes.",
    isRead: true,
  }
];

const MessagePage = () => {
  const styles = StyleSheet.create({
    contentContainer: {
      padding: 20,
      paddingHorizontal: 40,
      marginTop: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    },
    title: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.primary,
      height: 24,
    },
    count: {
      fontFamily: "VT323",
      fontSize: 48,
      color: AppTheme.colors.primary,
      height: 48,
    },
    divider: {
      height: 2,
      backgroundColor: AppTheme.colors.primary,
      width: '100%',
    },
    messagesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* <Vignettage /> */}
        <Text style={styles.title}>Message</Text>
        <Text style={styles.count}>
          1 unread message
        </Text>
        <View style={styles.divider}/>
        <View style={styles.messagesContainer}>
          {messages.filter(m => !m.isRead).map((message) => (
            <MessageRow key={message.id} message={message} />
          ))}
        <View style={styles.divider}/>
          {messages.filter(m => m.isRead).map((message) => (
            <MessageRow key={message.id} message={message} />
          ))}
        </View>
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default MessagePage;
