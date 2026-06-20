import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<TabParamList, "NewHot">;

const UPCOMING_RELEASES = [
  {
    id: "1",
    month: "JUN",
    day: "25",
    title: "The Witcher: Season 3",
    description:
      "Destiny brought them together. Dangerous forces are trying to tear them apart. Geralt and Yennefer fight to keep Ciri safe.",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "2",
    month: "JUL",
    day: "04",
    title: "Stranger Things 5",
    description:
      "The epic conclusion to the worldwide phenomenon. Hawkins will never be the same as the Upside Down spills over into the real world.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500&auto=format&fit=crop",
  },
];

export default function NewHotScreen({ navigation }: Props) {
  const openDetail = (title: string) => (navigation as any).navigate("TitleDetail", { title });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New & Hot</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person" size={24} color="#0071eb" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {UPCOMING_RELEASES.map((item) => (
          <View key={item.id} style={styles.feedItem}>
            <View style={styles.dateColumn}>
              <Text style={styles.monthText}>{item.month}</Text>
              <Text style={styles.dayText}>{item.day}</Text>
            </View>

            <View style={styles.contentColumn}>
              <TouchableOpacity onPress={() => openDetail(item.title)} activeOpacity={0.8}>
                <Image source={{ uri: item.image }} style={styles.trailerImage} />
                <View style={styles.playIconOverlay}>
                  <Ionicons name="play-circle-outline" size={48} color="#fff" />
                </View>
              </TouchableOpacity>

              <View style={styles.actionRow}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.actionItem}>
                    <Ionicons name="notifications-outline" size={24} color="#fff" />
                    <Text style={styles.actionText}>Remind Me</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionItem} onPress={() => openDetail(item.title)}>
                    <Ionicons name="information-circle-outline" size={24} color="#fff" />
                    <Text style={styles.actionText}>Info</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.comingSoonText}>Coming {item.month} {item.day}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  feedItem: {
    flexDirection: "row",
    marginBottom: 40,
    paddingRight: 15,
  },
  dateColumn: {
    width: 60,
    alignItems: "center",
  },
  monthText: {
    color: "#a3a3a3",
    fontSize: 14,
    fontWeight: "bold",
  },
  dayText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  contentColumn: {
    flex: 1,
  },
  trailerImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    backgroundColor: "#333",
  },
  playIconOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -24,
    marginLeft: -24,
    opacity: 0.8,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  movieTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
  },
  actionItem: {
    alignItems: "center",
    marginLeft: 25,
  },
  actionText: {
    color: "#a3a3a3",
    fontSize: 10,
    marginTop: 5,
  },
  comingSoonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descriptionText: {
    color: "#a3a3a3",
    fontSize: 14,
    lineHeight: 20,
  },
});