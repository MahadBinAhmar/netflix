import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useAudioPlayer } from "expo-audio";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  const player = useAudioPlayer(require("../assets/audio/splash.mp3"));

  useEffect(() => {
    // Start playing the splash sound
    player.play();

    // Fallback timer: in case the audio fails to play or load, navigate to Login after 4 seconds
    const fallbackTimer = setTimeout(() => {
      navigation.replace("Login");
    }, 4000);

    const subscription = player.addListener("playbackStatusUpdate", (status) => {
      if (status.didJustFinish) {
        clearTimeout(fallbackTimer);
        navigation.replace("Login");
      }
    });

    return () => {
      clearTimeout(fallbackTimer);
      subscription.remove();
    };
  }, [player, navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/netflix-anim.json")}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={styles.animation}
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