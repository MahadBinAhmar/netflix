import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "TitleDetail">;

export default function TitleDetailScreen({ route, navigation }: Props) {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.videoPlayerContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop" }}
            style={styles.videoImage}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Ionicons name="close-circle" size={32} color="rgba(255, 255, 255, 0.8)" />
          </TouchableOpacity>
          <View style={styles.playIconOverlay}>
            <Ionicons name="play-circle" size={64} color="#fff" />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title || "Stranger Things"}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.matchText}>98% match</Text>
            <Text style={styles.metaText}>2022</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>16+</Text>
            </View>
            <Text style={styles.metaText}>4 Seasons</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>HD</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={24} color="#000" />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.downloadButton}>
            <Ionicons name="download-outline" size={24} color="#fff" />
            <Text style={styles.downloadButtonText}>Download</Text>
          </TouchableOpacity>

          <Text style={styles.synopsis}>
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
            terrifying supernatural forces and one strange little girl.
          </Text>

          <Text style={styles.castText}>Cast: Winona Ryder, David Harbour, Millie Bobby Brown...</Text>
          <Text style={styles.creatorText}>Creator: The Duffer Brothers</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="add" size={28} color="#fff" />
              <Text style={styles.actionItemText}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="thumbs-up-outline" size={28} color="#fff" />
              <Text style={styles.actionItemText}>Rate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="paper-plane-outline" size={28} color="#fff" />
              <Text style={styles.actionItemText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  videoPlayerContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  videoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 15,
    zIndex: 10,
  },
  playIconOverlay: {
    position: "absolute",
    zIndex: 5,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  matchText: {
    color: "#46d369",
    fontWeight: "bold",
    marginRight: 10,
  },
  metaText: {
    color: "#a3a3a3",
    marginRight: 10,
  },
  badge: {
    backgroundColor: "#333",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 10,
  },
  badgeText: {
    color: "#a3a3a3",
    fontSize: 12,
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  playButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  synopsis: {
    color: "#fff",
    lineHeight: 22,
    marginBottom: 10,
  },
  castText: {
    color: "#a3a3a3",
    fontSize: 12,
    marginBottom: 2,
  },
  creatorText: {
    color: "#a3a3a3",
    fontSize: 12,
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  actionItem: {
    alignItems: "center",
    marginRight: 40,
  },
  actionItemText: {
    color: "#a3a3a3",
    fontSize: 12,
    marginTop: 5,
  },
});