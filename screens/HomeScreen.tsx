import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<TabParamList, "Home">;

interface MovieItem {
  id: string;
  title: string;
  isOriginal: boolean;
  poster: string;
  progress?: number;
}

interface RowData {
  title: string;
  items: MovieItem[];
}

const ROWS_DATA: RowData[] = [
  {
    title: "Releases in the Past Year",
    items: [
      {
        id: "mh",
        title: "Money Heist",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      },
      {
        id: "st",
        title: "Stranger Things",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
      {
        id: "pb",
        title: "Peaky Blinders",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "fr",
        title: "Friends",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Continue Watching for Mahad",
    items: [
      {
        id: "bh",
        title: "Bheed",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop",
        progress: 0.45,
      },
      {
        id: "hl",
        title: "Holiday",
        isOriginal: false,
        poster: "https://image.tmdb.org/t/p/w500/bSSx9Sq6irWwN9NTQmoT9KE8kXn.jpg",
        progress: 0.75,
      },
      {
        id: "rrr",
        title: "RRR",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
        progress: 0.3,
      },
      {
        id: "fr_cw",
        title: "Friends",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=300&auto=format&fit=crop",
        progress: 0.9,
      },
    ],
  },
  {
    title: "Suspenseful TV Shows",
    items: [
      {
        id: "mh_s",
        title: "Money Heist",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      },
      {
        id: "st_s",
        title: "Stranger Things",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
      {
        id: "pb_s",
        title: "Peaky Blinders",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "fr_s",
        title: "Friends",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Selected for You Today",
    items: [
      {
        id: "bh_y",
        title: "Bheed",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "mh_y",
        title: "Money Heist",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      },
      {
        id: "rrr_y",
        title: "RRR",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "st_y",
        title: "Stranger Things",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
    ],
  },
  {
    title: "My List",
    items: [
      {
        id: "mh_mylist",
        title: "Money Heist",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      },
      {
        id: "wd_mylist",
        title: "Wednesday",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
      {
        id: "pb_mylist",
        title: "Peaky Blinders",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "fr_mylist",
        title: "Friends",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "New Releases",
    items: [
      {
        id: "ct_new",
        title: "Citadel",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "wt_new",
        title: "The Witcher",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "hl_new",
        title: "Holiday",
        isOriginal: false,
        poster: "https://image.tmdb.org/t/p/w500/bSSx9Sq6irWwN9NTQmoT9KE8kXn.jpg",
      },
      {
        id: "st_new",
        title: "Stranger Things",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
    ],
  },
  {
    title: "Ensemble TV Shows",
    items: [
      {
        id: "wd_ensemble",
        title: "Wednesday",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "mh_ensemble",
        title: "Money Heist",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      },
      {
        id: "st_ensemble",
        title: "Stranger Things",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
      {
        id: "pb_ensemble",
        title: "Peaky Blinders",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "TV Comedies",
    items: [
      {
        id: "fr_comedy",
        title: "Friends",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "hl_comedy",
        title: "Holiday",
        isOriginal: false,
        poster: "https://image.tmdb.org/t/p/w500/bSSx9Sq6irWwN9NTQmoT9KE8kXn.jpg",
      },
      {
        id: "b99_comedy",
        title: "Brooklyn Nine-Nine",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "tbbt_comedy",
        title: "The Big Bang Theory",
        isOriginal: false,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Only on Netflix",
    items: [
      {
        id: "mh_netflix",
        title: "Money Heist",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      },
      {
        id: "st_netflix",
        title: "Stranger Things",
        isOriginal: true,
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      },
      {
        id: "wd_netflix",
        title: "Wednesday",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&auto=format&fit=crop",
      },
      {
        id: "wt_netflix",
        title: "The Witcher",
        isOriginal: true,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
];

export default function HomeScreen({ navigation }: Props) {
  // Root stack lives above this tab, so cast is required to reach TitleDetail
  const openDetail = (title: string) =>
    (navigation as any).navigate("TitleDetail", { title });

  const renderRow = (rowData: RowData) => (
    <View key={rowData.title} style={styles.rowContainer}>
      <Text style={styles.rowTitle}>{rowData.title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rowScroll}>
        {rowData.items.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => openDetail(item.title)}
            activeOpacity={0.7}
            style={styles.moviePosterContainer}
          >
            <Image source={{ uri: item.poster }} style={styles.moviePoster} />

            {/* Play Overlay & Progress bar for Continue Watching */}
            {item.progress !== undefined && (
              <>
                <View style={styles.playOverlayContainer}>
                  <View style={styles.playCircle}>
                    <Ionicons
                      name="play"
                      size={18}
                      color="#fff"
                      style={styles.playOverlayIcon}
                    />
                  </View>
                </View>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[styles.progressBarActive, { width: `${item.progress * 100}%` }]}
                  />
                </View>
              </>
            )}

            {/* Netflix Original Badge Overlay */}
            {item.isOriginal && (
              <Image
                source={require("../assets/homelogo.png")}
                style={styles.originalBadge}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Overlay */}
        <View style={styles.header}>
          <LinearGradient
            colors={["rgba(0,0,0,0.85)", "rgba(0,0,0,0.3)", "transparent"]}
            style={styles.headerGradient}
          />
          <View style={styles.headerTopRow}>
            <Image
              source={require("../assets/homelogo.png")}
              style={styles.netflixLogo}
              resizeMode="contain"
            />
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="search" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon}>
                <Image
                  source={require("../assets/profiles/1.jpg")}
                  style={styles.profileAvatar}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerBottomRow}>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.headerNav}>TV Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.headerNav}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navLinkRow}>
              <Text style={styles.headerNav}>Categories</Text>
              <Ionicons name="chevron-down" size={14} color="#fff" style={styles.chevronIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <View style={styles.heroCardContainer}>
            <Image
              source={{
                uri: "https://image.tmdb.org/t/p/original/5FmtHHDGPofW5Zjns1EM1D8503c.jpg",
              }}
              style={styles.heroCardImage}
              resizeMode="cover"
            />
          </View>
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={styles.topGradient}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)", "#000"]}
            style={styles.bottomGradient}
          />
          <View style={styles.heroContentContainer}>
            <Text style={styles.heroGenres}>Charming • Feel-Good • Dramedy • Movie</Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="add" size={26} color="#fff" />
                <Text style={styles.actionText}>My List</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => openDetail("Kuch Kuch Hota Hai")}
              >
                <Ionicons name="play" size={22} color="#000" />
                <Text style={styles.playButtonText}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => openDetail("Kuch Kuch Hota Hai")}
              >
                <Ionicons name="information-circle-outline" size={26} color="#fff" />
                <Text style={styles.actionText}>Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Movie Rows */}
        <View style={styles.rowsContent}>{ROWS_DATA.map((row) => renderRow(row))}</View>
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
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: Platform.OS === "ios" ? 54 : StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 36,
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: -1,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 48,
  },
  netflixLogo: {
    width: 28,
    height: 38,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    marginLeft: 20,
  },
  profileAvatar: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  headerBottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  navLink: {
    marginHorizontal: 20,
  },
  navLinkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headerNav: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  chevronIcon: {
    marginLeft: 4,
    marginTop: 2,
  },
  heroContainer: {
    width: "100%",
    height: 530,
    position: "relative",
  },
  heroCardContainer: {
    width: 170,
    height: 250,
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? 170 : 155,
    borderRadius: 3,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    zIndex: 2,
  },
  heroCardImage: {
    width: "100%",
    height: "100%",
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 1,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    zIndex: 1,
  },
  heroContentContainer: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 2,
  },
  heroGenres: {
    color: "#e6e6e6",
    fontSize: 13,
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
  heroButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 30,
  },
  actionButton: {
    alignItems: "center",
    width: 60,
  },
  actionText: {
    color: "#fff",
    fontSize: 11,
    marginTop: 4,
    fontWeight: "500",
  },
  playButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 110,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  playButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
  rowsContent: {
    marginTop: 5,
  },
  rowContainer: {
    marginBottom: 24,
    paddingLeft: 12,
  },
  rowTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rowScroll: {
    paddingRight: 12,
  },
  moviePosterContainer: {
    position: "relative",
    marginRight: 10,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
  },
  moviePoster: {
    width: 110,
    height: 160,
    borderRadius: 6,
  },
  playOverlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  playCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  playOverlayIcon: {
    marginLeft: 3,
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    overflow: "hidden",
    zIndex: 3,
  },
  progressBarActive: {
    height: "100%",
    backgroundColor: "#E50914",
  },
  originalBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    width: 14,
    height: 20,
    zIndex: 3,
  },
});