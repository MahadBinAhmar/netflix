import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/netflix-anim.json")}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={styles.animation}
        onAnimationFinish={() => navigation.replace("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 300,
    height: 300,
  },
});