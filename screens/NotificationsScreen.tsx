import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

const NOTIFICATIONS = [
  {
    id: "1",
    type: "New Arrival",
    title: "Peaky Blinders",
    date: "Jun 19",
    image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    type: "Continue Watching",
    title: "Stranger Things",
    date: "Jun 15",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    type: "Top Pick for Mahad",
    title: "The Witcher",
    date: "Jun 10",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=200&auto=format&fit=crop",
  },
];

export default function NotificationsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {NOTIFICATIONS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.notificationItem} activeOpacity={0.7}>
            <Image source={{ uri: item.image }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
              <Text style={styles.typeText}>{item.type}</Text>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  notificationItem: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  thumbnail: {
    width: 120,
    height: 70,
    borderRadius: 4,
    marginRight: 15,
    backgroundColor: "#333",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  typeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  titleText: {
    color: "#a3a3a3",
    fontSize: 14,
    marginBottom: 3,
  },
  dateText: {
    color: "#8c8c8c",
    fontSize: 12,
  },
});