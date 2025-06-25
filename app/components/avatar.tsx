import { Image, View } from "react-native";

const Avatar = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/avatars/basti-u.png")}
        style={{ width: 80, height: 80 }}
      />
    </View>
  );
};

export default Avatar;
