import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileSelectScreen from "./screens/ProfileSelectScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import TitleDetailScreen from "./screens/TitleDetailScreen";
import MainTabs from "./navigation/MainTabs";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProfileSelect" component={ProfileSelectScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="TitleDetail" component={TitleDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}