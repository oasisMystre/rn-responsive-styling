import { Slot } from "expo-router";

import { ThemeProvider } from "rn-responsive-styling";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </View>
  );
}
