import {
  Pressable,
  PressableProps,
  ActivityIndicator,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { Text } from './Text';

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-md active:opacity-90',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 dark:bg-blue-700',
        secondary: 'bg-gray-200 dark:bg-gray-700',
        success: 'bg-green-600 dark:bg-green-700',
        warning: 'bg-amber-500 dark:bg-amber-600',
        danger: 'bg-red-600 dark:bg-red-700',
        outline: 'bg-transparent border border-gray-300 dark:border-gray-600',
        ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
        link: 'bg-transparent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-1 text-sm',
        lg: 'h-12 px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('font-medium', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-gray-900 dark:text-white',
      success: 'text-white',
      warning: 'text-white',
      danger: 'text-white',
      outline: 'text-black dark:text-white',
      ghost: 'text-black dark:text-white',
      link: 'text-blue-600 dark:text-blue-400',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends Omit<PressableProps, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Button = ({
  className,
  textClassName,
  variant,
  size,
  children,
  disabled = false,
  loading = false,
  prefix,
  suffix,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getSpinnerColor = () => {
    if (variant === 'ghost' || variant === 'link' || variant === 'secondary') {
      return isDark ? 'white' : 'black';
    } else if (variant === 'outline') {
      return isDark ? 'white' : 'black';
    }
    return 'white';
  };

  return (
    <Pressable
      className={cn(
        buttonVariants({ variant, size }),
        isDisabled && 'opacity-50',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      <View className="flex-row items-center justify-center">
        {loading ? (
          <ActivityIndicator size="small" color={getSpinnerColor()} />
        ) : (
          <>
            {prefix && <View className="mr-2">{prefix}</View>}

            {children && typeof children === 'string' ? (
              <Text
                className={cn(
                  buttonTextVariants({ variant, size }),
                  textClassName
                )}
              >
                {children}
              </Text>
            ) : (
              children
            )}

            {suffix && <View className="ml-2">{suffix}</View>}
          </>
        )}
      </View>
    </Pressable>
  );
};
