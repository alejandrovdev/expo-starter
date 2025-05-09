import { View } from 'react-native';
import { Icon } from '@/shared/components/ui/Icon';
import { Button } from '@/shared/components/ui/Button';
import { Text } from '@/shared/components/ui/Text';
import { cn } from '@/shared/utils/cn';
import useColorScheme from '@/shared/hooks/useColorScheme';
import { useCallback, useMemo } from 'react';
import COLORS from '@/shared/constants/colors';

type ThemeSwitcherButtonProps = {
  compact?: boolean;
};

export const ThemeSwitcherButton = ({
  compact = false,
}: ThemeSwitcherButtonProps) => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();

  const handleThemeChange = useCallback(() => {
    setColorScheme(isDarkColorScheme ? 'light' : 'dark');
  }, [isDarkColorScheme, setColorScheme]);

  const buttonVariant = useMemo(
    () => (isDarkColorScheme ? 'outline' : 'secondary'),
    [isDarkColorScheme]
  );

  const buttonSize = useMemo(() => (compact ? 'sm' : 'default'), [compact]);

  return (
    <View className={cn(!compact && 'flex items-center')}>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        onPress={handleThemeChange}
        prefix={
          <Icon
            library="Ionicons"
            name={isDarkColorScheme ? 'moon' : 'sunny'}
            size={compact ? 'sm' : 'md'}
            color={isDarkColorScheme ? COLORS.white : COLORS.black}
          />
        }
      >
        {!compact && (isDarkColorScheme ? 'Dark Mode' : 'Light Mode')}
      </Button>

      {!compact && (
        <View className="mt-4">
          <Text className="text-sm text-neutral-600 dark:text-neutral-400">
            Current theme: {colorScheme}
          </Text>
        </View>
      )}
    </View>
  );
};
