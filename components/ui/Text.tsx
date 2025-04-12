import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import React from 'react';
import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-black dark:text-white',
      secondary: 'text-gray-500 dark:text-gray-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-amber-500 dark:text-amber-400',
      danger: 'text-red-600 dark:text-red-400',
      disabled: 'text-gray-400 dark:text-gray-500',
      link: 'text-blue-600 dark:text-blue-400 underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface TextProps extends RNTextProps, VariantProps<typeof textVariants> {
  className?: string;
}

export const Text = ({
  className,
  variant,
  style,
  children,
  ...props
}: TextProps) => {
  return (
    <RNText
      className={cn(textVariants({ variant }), className)}
      style={style}
      {...props}
    >
      {children}
    </RNText>
  );
};
