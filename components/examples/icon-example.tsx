import React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Icon } from '@/components/ui/Icon';

export const IconExample = () => {
  return (
    <View className="mb-6">
      <Text className="text-xl font-bold mb-6">
        Icon Examples with Variants
      </Text>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Direct Color</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="home" size="md" color="#FF0000" />
          <Icon library="Feather" name="heart" size="md" color="#00FF00" />
          <Icon library="Feather" name="star" size="md" color="#0000FF" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Default Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="home" size="md" color="default" />
          <Icon library="Feather" name="settings" size="md" color="default" />
          <Icon library="Feather" name="user" size="md" color="default" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Success Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="check" size="md" color="success" />
          <Icon
            library="Feather"
            name="check-circle"
            size="md"
            color="success"
          />

          <Icon library="Feather" name="thumbs-up" size="md" color="success" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Warning Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon
            library="Feather"
            name="alert-triangle"
            size="md"
            color="warning"
          />

          <Icon
            library="Feather"
            name="alert-circle"
            size="md"
            color="warning"
          />

          <Icon library="Feather" name="bell" size="md" color="warning" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Danger Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="x" size="md" color="danger" />
          <Icon library="Feather" name="x-circle" size="md" color="danger" />
          <Icon library="Feather" name="trash-2" size="md" color="danger" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Disabled Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="lock" size="md" color="disabled" />
          <Icon library="Feather" name="slash" size="md" color="disabled" />
          <Icon library="Feather" name="x-square" size="md" color="disabled" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Link Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="link" size="md" color="link" />
          <Icon library="Feather" name="external-link" size="md" color="link" />
          <Icon library="Feather" name="share" size="md" color="link" />
        </View>
      </View>
    </View>
  );
};
