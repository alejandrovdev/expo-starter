import { Icons, IconLibrary, IconProps } from '@/shared/utils/icons';
import useColorScheme from '@/shared/hooks/useColorScheme';
import COLORS from '@/shared/constants/colors';
import { useMemo } from 'react';
import ICON_SIZES from '@/shared/constants/icon-sizes';

type IconSize = keyof typeof ICON_SIZES | number;

type IconVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled'
  | 'link';

const isIconVariant = (value: string): value is IconVariant => {
  return [
    'default',
    'success',
    'warning',
    'danger',
    'disabled',
    'link',
  ].includes(value);
};

const variantToColor = (variant: IconVariant, isDarkMode: boolean): string => {
  switch (variant) {
    case 'default':
      return isDarkMode ? COLORS.white : COLORS.black;
    default:
      return COLORS[variant as keyof typeof COLORS];
  }
};

type Props<T extends IconLibrary> = Omit<IconProps<T>, 'size'> & {
  library: T;
  size?: IconSize;
  color?: IconVariant | string;
};

export const Icon = <T extends IconLibrary>({
  library,
  name,
  size = 'md',
  color,
  style,
}: Props<T>) => {
  const { isDarkColorScheme } = useColorScheme();
  const IconComponent = useMemo(() => Icons[library], [library]);

  const iconSize = useMemo(() => {
    return typeof size === 'number' ? size : ICON_SIZES[size];
  }, [size]);

  const iconColor = useMemo(() => {
    if (!color) {
      return isDarkColorScheme ? COLORS.white : COLORS.black;
    }

    if (typeof color === 'string' && isIconVariant(color)) {
      return variantToColor(color, isDarkColorScheme);
    }

    return color;
  }, [color, isDarkColorScheme]);

  return (
    <IconComponent
      name={name}
      size={iconSize}
      color={iconColor}
      style={style}
    />
  );
};
