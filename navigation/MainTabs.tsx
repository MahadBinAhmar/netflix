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
    NewHot: ["flame", "flame-outline"],
    MyNetflix: ["person", "person-outline"],
  };
  const [active, inactive] = icons[routeName];
  return (focused ? active : inactive) as keyof typeof Ionicons.glyphMap;
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#E50914",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#000" },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={getIcon(route.name as keyof TabParamList, focused)}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="NewHot" component={NewHotScreen} options={{ title: "New & Hot" }} />
      <Tab.Screen name="MyNetflix" component={MyNetflixScreen} options={{ title: "My Netflix" }} />
    </Tab.Navigator>
  );
}