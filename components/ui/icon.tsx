import { Icons, IconLibrary, IconProps } from '@/shared/utils/icons';
import useColorScheme from '@/shared/hooks/useColorScheme';
import COLORS from '@/shared/constants/colors';
import { useMemo } from 'react';
import ICON_SIZES from '@/shared/constants/icon-sizes';

type IconSize = keyof typeof ICON_SIZES | number;

type IconVariant =
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled'
  | 'link';

const variantToColor = (
  variant: IconVariant | undefined,
  isDarkMode: boolean
): string => {
  switch (variant) {
    case 'default':
      return isDarkMode ? COLORS.white : COLORS.black;
    case 'secondary':
      return isDarkMode ? COLORS.secondary.dark : COLORS.secondary.light;
    case 'success':
      return isDarkMode ? COLORS.success.dark : COLORS.success.light;
    case 'warning':
      return isDarkMode ? COLORS.warning.dark : COLORS.warning.light;
    case 'danger':
      return isDarkMode ? COLORS.danger.dark : COLORS.danger.light;
    case 'disabled':
      return isDarkMode ? COLORS.disabled.dark : COLORS.disabled.light;
    case 'link':
      return isDarkMode ? COLORS.link.dark : COLORS.link.light;
    default:
      return isDarkMode ? COLORS.white : COLORS.black;
  }
};

type Props<T extends IconLibrary> = Omit<IconProps<T>, 'size'> & {
  library: T;
  size?: IconSize;
  color?: string;
  variant?: IconVariant;
};

export const Icon = <T extends IconLibrary>({
  library,
  name,
  size = 'md',
  color,
  variant,
  style,
}: Props<T>) => {
  const { isDarkColorScheme } = useColorScheme();
  const IconComponent = useMemo(() => Icons[library], [library]);

  const iconSize = useMemo(() => {
    return typeof size === 'number' ? size : ICON_SIZES[size];
  }, [size]);

  const iconColor = useMemo(() => {
    if (color) return color;

    if (variant) return variantToColor(variant, isDarkColorScheme);

    return isDarkColorScheme ? COLORS.white : COLORS.black;
  }, [color, variant, isDarkColorScheme]);

  return (
    <IconComponent
      name={name}
      size={iconSize}
      color={iconColor}
      style={style}
    />
  );
};
