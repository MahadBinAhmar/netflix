import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NewHotScreen from "../screens/NewHotScreen";
import MyNetflixScreen from "../screens/MyNetflixScreen";
import { TabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<TabParamList>();

function getIcon(
  routeName: keyof TabParamList,
  focused: boolean
): keyof typeof Ionicons.glyphMap {
  const icons: Record<keyof TabParamList, [string, string]> = {
    Home: ["home", "home-outline"],
    Search: ["search", "search-outline"],
    NewHot: ["albums", "albums-outline"],
    MyNetflix: ["arrow-down-circle", "arrow-down-circle-outline"],
  };
  const [active, inactive] = icons[routeName];
  return (focused ? active : inactive) as keyof typeof Ionicons.glyphMap;
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#8c8c8c",
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={getIcon(route.name as keyof TabParamList, focused)}
            size={24}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NewHot" component={NewHotScreen} options={{ title: "New & Hot" }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="MyNetflix" component={MyNetflixScreen} options={{ title: "Downloads" }} />
    </Tab.Navigator>
  );
}