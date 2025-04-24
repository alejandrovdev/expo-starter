import React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/Text';

export const TextExample = () => {
  return (
    <View>
      <Text className="text-xl font-bold mb-6">Text Examples</Text>

      <View className="mb-6 gap-4">
        <Text>Default Text</Text>
        <Text variant="primary">Primary Text</Text>
        <Text variant="success">Success Text</Text>
        <Text variant="warning">Warning Text</Text>
        <Text variant="danger">Danger Text</Text>
        <Text variant="disabled">Disabled Text</Text>
        <Text variant="link">Link Text</Text>
      </View>
    </View>
  );
};
