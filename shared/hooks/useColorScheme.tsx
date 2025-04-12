import { useColorScheme as useNativewindColorScheme } from 'nativewind';

const DEFAULT_COLOR_SCHEME = 'dark';

const useColorScheme = () => {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativewindColorScheme();

  return {
    colorScheme: colorScheme ?? DEFAULT_COLOR_SCHEME,
    isDarkColorScheme: colorScheme === DEFAULT_COLOR_SCHEME,
    setColorScheme,
    toggleColorScheme,
  };
};

export default useColorScheme;
