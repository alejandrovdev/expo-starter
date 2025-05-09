import React from 'react';
import { View, ViewProps } from 'react-native';
import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('bg-white dark:bg-gray-800 overflow-hidden', {
  variants: {
    rounded: {
      true: 'rounded-lg',
      false: 'rounded-none',
    },
    border: {
      none: '',
      default: 'border border-gray-200 dark:border-gray-700',
    },
  },
  defaultVariants: {
    rounded: true,
    border: 'default',
  },
});

export interface CardProps
  extends ViewProps,
    VariantProps<typeof cardVariants> {
  className?: string;
}

export function Card({ className, rounded, border, ...props }: CardProps) {
  return (
    <View
      className={cn(cardVariants({ rounded, border }), className)}
      {...props}
    />
  );
}

export interface CardHeaderProps extends ViewProps {
  className?: string;
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <View
      className={cn(
        'p-4 border-b border-gray-200 dark:border-gray-700',
        className
      )}
      {...props}
    />
  );
}

export interface CardContentProps extends ViewProps {
  className?: string;
}

export function CardContent({ className, ...props }: CardContentProps) {
  return <View className={cn('p-4', className)} {...props} />;
}

export interface CardFooterProps extends ViewProps {
  className?: string;
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <View
      className={cn(
        'p-4 border-t border-gray-200 dark:border-gray-700',
        className
      )}
      {...props}
    />
  );
}
