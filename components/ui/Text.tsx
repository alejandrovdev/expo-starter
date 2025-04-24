import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import React from 'react';
import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-gray-900 dark:text-white',
      primary: 'text-primary dark:text-primary',
      success: 'text-success dark:text-success',
      warning: 'text-warning dark:text-warning',
      danger: 'text-danger dark:text-danger',
      disabled: 'text-disabled dark:text-disabled',
      link: 'text-link dark:text-link underline',
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
