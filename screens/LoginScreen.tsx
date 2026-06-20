import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<1 | 2>(1); // 1: Email/Mobile, 2: Password

  const handleContinue = () => {
    if (!email) {
      Alert.alert("Error", "Please enter a valid email address or mobile number");
      return;
    }
    setStep(2);
  };

  const handleSignIn = () => {
    if (!password) {
      Alert.alert("Error", "Please enter your password");
      return;
    }
    navigation.replace("ProfileSelect");
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <LinearGradient
      colors={["#350d11", "#0b0102", "#000000"]}
      locations={[0, 0.35, 0.7]}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                  <Ionicons name="chevron-back" size={26} color="#ffffff" style={styles.backIcon} />
                </TouchableOpacity>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>Enter your info to sign in</Text>

                {step === 1 ? (
                  <>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputLabel}>
                        Email address or mobile number
                      </Text>
                      <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.textInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor="#7f7f7f"
                        selectionColor="#ffffff"
                      />
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleContinue}
                      activeOpacity={0.85}
                    >
                      <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputLabel}>Password</Text>
                      <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.textInput}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor="#7f7f7f"
                        selectionColor="#ffffff"
                      />
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSignIn}
                      activeOpacity={0.85}
                    >
                      <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                  </>
                )}

                <TouchableOpacity style={styles.helpButton} activeOpacity={0.7}>
                  <Text style={styles.helpText}>Get help ⌵</Text>
                </TouchableOpacity>

                <Text style={styles.disclaimerText}>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <Text style={styles.learnMoreText}>Learn more</Text>
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 8,
  },
  backButton: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    marginLeft: -4,
  },
  logo: {
    width: 106,
    height: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 24,
    letterSpacing: 0.2,
  },
  inputContainer: {
    backgroundColor: "#161616",
    borderWidth: 1,
    borderColor: "#7c7c7c",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
    height: 70,
    justifyContent: "center",
  },
  inputLabel: {
    color: "#a3a3a3",
    fontSize: 12,
    marginBottom: 2,
    fontWeight: "500",
  },
  textInput: {
    color: "#ffffff",
    fontSize: 18,
    padding: 0,
    height: 28,
  },
  button: {
    backgroundColor: "#e50914",
    height: 54,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  helpButton: {
    alignSelf: "flex-start",
    marginTop: 22,
    paddingVertical: 8,
  },
  helpText: {
    color: "#b3b3b3",
    fontSize: 16,
    fontWeight: "500",
  },
  disclaimerText: {
    color: "#737373",
    fontSize: 13,
    textAlign: "left",
    lineHeight: 18,
    marginTop: 40,
  },
  learnMoreText: {
    color: "#ffffff",
    textDecorationLine: "underline",
  },
});
