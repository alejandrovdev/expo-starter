import './global.css';

import { Stack } from 'expo-router';
import { ThemeProvider } from '@/providers/theme-provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
