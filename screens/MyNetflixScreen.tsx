import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<TabParamList, "MyNetflix">;

const MY_LIST = [
  "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=200&auto=format&fit=crop",
];

export default function MyNetflixScreen({ navigation }: Props) {
  const openDetail = (title: string) => (navigation as any).navigate("TitleDetail", { title });
  const openNotifications = () => (navigation as any).navigate("Notifications");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Netflix</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={48} color="#fff" />
          </View>
          <Text style={styles.profileName}>Mahad Ali</Text>
          <TouchableOpacity>
            <Text style={styles.manageText}>Manage Profiles</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.actionRow} onPress={openNotifications}>
          <View style={styles.actionRowLeft}>
            <View style={styles.iconCircleMax}>
              <Ionicons name="notifications" size={24} color="#fff" />
            </View>
            <Text style={styles.actionRowText}>Notifications</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#8c8c8c" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionRow}>
          <View style={styles.actionRowLeft}>
            <View style={styles.iconCircleBlue}>
              <Ionicons name="download" size={24} color="#fff" />
            </View>
            <Text style={styles.actionRowText}>Downloads</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#8c8c8c" />
        </TouchableOpacity>

        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>My List</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MY_LIST.map((url, index) => (
              <TouchableOpacity key={index} onPress={() => openDetail("Stranger Things")} activeOpacity={0.7}>
                <Image source={{ uri: url }} style={styles.moviePoster} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 20,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#E50914",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  manageText: {
    color: "#a3a3a3",
    fontSize: 16,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  actionRowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircleMax: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E50914",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  iconCircleBlue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0071eb",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  actionRowText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  listContainer: {
    marginTop: 10,
    paddingLeft: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  moviePoster: {
    width: 110,
    height: 160,
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: "#333",
  },
});