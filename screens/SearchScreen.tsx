import { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<TabParamList, "Search">;

const TOP_SEARCHES = [
  { id: "1", title: "Citadel", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop" },
  { id: "2", title: "The Witcher", image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop" },
  { id: "3", title: "Breaking Bad", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=300&auto=format&fit=crop" },
  { id: "4", title: "Peaky Blinders", image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=300&auto=format&fit=crop" },
];

export default function SearchScreen({ navigation }: Props) {
  const [query, setQuery] = useState("");

  const openDetail = (title: string) => (navigation as any).navigate("TitleDetail", { title });

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#8c8c8c" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a show, movie, genre, etc."
          placeholderTextColor="#8c8c8c"
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 ? (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Ionicons name="close-circle" size={20} color="#8c8c8c" style={styles.iconRight} />
          </TouchableOpacity>
        ) : (
          <Ionicons name="mic" size={20} color="#8c8c8c" style={styles.iconRight} />
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Top Searches</Text>
        {TOP_SEARCHES.map((movie) => (
          <TouchableOpacity key={movie.id} style={styles.resultItem} onPress={() => openDetail(movie.title)}>
            <Image source={{ uri: movie.image }} style={styles.thumbnail} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Ionicons name="play-circle-outline" size={32} color="#fff" style={styles.playIcon} />
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
  searchBarContainer: {
    flexDirection: "row",
    backgroundColor: "#333",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
  },
  iconRight: {
    marginLeft: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    marginBottom: 3,
    height: 80,
  },
  thumbnail: {
    width: 140,
    height: "100%",
    resizeMode: "cover",
  },
  movieTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 15,
  },
  playIcon: {
    paddingRight: 15,
  },
});