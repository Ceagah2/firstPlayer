import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { Archivo_200ExtraLight, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold, Archivo_800ExtraBold, Archivo_900Black, useFonts } from "@expo-google-fonts/archivo";
import { ActivityIndicator } from "react-native";
import Routes from './src/presentation/routes';

export default function App() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  const [loaded] = useFonts({
    Archivo_400Regular,
    Archivo_200ExtraLight,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Archivo_800ExtraBold,
    Archivo_900Black
  })

  if(!loaded) {
    return <ActivityIndicator />
  }

  if (!publishableKey) {
    throw new Error( 
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <Routes />
      </ClerkLoaded>
    </ClerkProvider>
  );
}

