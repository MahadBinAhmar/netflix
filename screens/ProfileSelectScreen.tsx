import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileSelect">;

const AVATAR_SIZE = 118;

const PROFILES = [
  { id: "1", name: "Mahad", image: require("../assets/profiles/5.jpg") },
  { id: "2", name: "Maham", image: require("../assets/profiles/3.jpg") },
  { id: "3", name: "Abbas", image: require("../assets/profiles/2.jpg") },
  { id: "4", name: "Muskan", image: require("../assets/profiles/4.jpg") },
  { id: "5", name: "Aiman", image: require("../assets/profiles/1.jpg") },
];

export default function ProfileSelectScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.editBtn}>
          <Ionicons name="pencil" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Who's Watching?</Text>

      <View style={styles.grid}>
        {PROFILES.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={styles.profileItem}
            activeOpacity={0.85}
            onPress={() => navigation.replace("MainTabs")}
          >
            <Image source={p.image} style={styles.avatar} />
            <Text style={styles.name}>{p.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "ios" ? 52 : 34,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  logo: {
    width: 140,
    height: 38,
  },
  editBtn: {
    position: "absolute",
    right: 22,
    top: 6,
  },
  title: {
    color: "#E5E5E5",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 35,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 48,
  },
  profileItem: {
    width: AVATAR_SIZE,
    alignItems: "center",
    marginBottom: 44,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: 4,
  },
  name: {
    color: "#fff",
    fontSize: 15,
    marginTop: 10,
  },
});