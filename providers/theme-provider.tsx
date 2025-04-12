import {
  Theme,
  ThemeProvider as NavigationThemeProvider,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import NAV_THEME from '@/shared/constants/themes/nav-theme';
import useColorScheme from '@/shared/hooks/useColorScheme';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined'
    ? React.useEffect
    : React.useLayoutEffect;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const hasMounted = React.useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background');
    }

    setIsColorSchemeLoaded(true);

    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <NavigationThemeProvider
      value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}
    >
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
      {children}
    </NavigationThemeProvider>
  );
};
