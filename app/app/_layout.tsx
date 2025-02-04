import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />; // Mostra um loading enquanto carrega
  }
  


  return <Stack />;
}
