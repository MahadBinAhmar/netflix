import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<TabParamList, "Home">;

const MOVIE_POSTERS = [
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=200&auto=format&fit=crop",
];

export default function HomeScreen({ navigation }: Props) {
  // Root stack lives above this tab, so cast is required to reach TitleDetail
  const openDetail = (title: string) => (navigation as any).navigate("TitleDetail", { title });

  const renderRow = (title: string) => (
    <View style={styles.rowContainer}>
      <Text style={styles.rowTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rowScroll}>
        {MOVIE_POSTERS.map((url, index) => (
          <TouchableOpacity key={index} onPress={() => openDetail("Stranger Things")} activeOpacity={0.7}>
            <Image source={{ uri: url }} style={styles.moviePoster} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.netflixLogo}>N</Text>
          <Text style={styles.headerNav}>TV Shows</Text>
          <Text style={styles.headerNav}>Movies</Text>
          <Text style={styles.headerNav}>Categories</Text>
        </View>

        <View style={styles.heroContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&auto=format&fit=crop" }}
            style={styles.heroImage}
          />
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="add" size={24} color="#fff" />
              <Text style={styles.actionText}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={24} color="#000" />
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => openDetail("Stranger Things")}>
              <Ionicons name="information-circle-outline" size={24} color="#fff" />
              <Text style={styles.actionText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {renderRow("Trending Now")}
        {renderRow("Top Picks for Mahad")}
        {renderRow("Only on Netflix")}
        {renderRow("Action & Adventure")}
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
    paddingBottom: 20,
  },
  header: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 10,
    paddingHorizontal: 10,
  },
  netflixLogo: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "bold",
  },
  headerNav: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  heroContainer: {
    width: "100%",
    height: 450,
    marginBottom: 20,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroButtons: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
  playButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  playButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  rowContainer: {
    marginBottom: 20,
    paddingLeft: 10,
  },
  rowTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rowScroll: {
    paddingRight: 10,
  },
  moviePoster: {
    width: 110,
    height: 160,
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: "#333",
  },
});