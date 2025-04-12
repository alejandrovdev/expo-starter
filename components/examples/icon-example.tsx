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
          <Icon library="Feather" name="home" size="md" variant="default" />
          <Icon library="Feather" name="settings" size="md" variant="default" />
          <Icon library="Feather" name="user" size="md" variant="default" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Secondary Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="bell" size="md" variant="secondary" />
          <Icon
            library="Feather"
            name="calendar"
            size="md"
            variant="secondary"
          />

          <Icon library="Feather" name="clock" size="md" variant="secondary" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Success Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="check" size="md" variant="success" />
          <Icon
            library="Feather"
            name="check-circle"
            size="md"
            variant="success"
          />

          <Icon
            library="Feather"
            name="thumbs-up"
            size="md"
            variant="success"
          />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Warning Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon
            library="Feather"
            name="alert-triangle"
            size="md"
            variant="warning"
          />

          <Icon
            library="Feather"
            name="alert-circle"
            size="md"
            variant="warning"
          />

          <Icon library="Feather" name="bell" size="md" variant="warning" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Danger Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="x" size="md" variant="danger" />
          <Icon library="Feather" name="x-circle" size="md" variant="danger" />
          <Icon library="Feather" name="trash-2" size="md" variant="danger" />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Disabled Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="lock" size="md" variant="disabled" />
          <Icon library="Feather" name="slash" size="md" variant="disabled" />
          <Icon
            library="Feather"
            name="x-square"
            size="md"
            variant="disabled"
          />
        </View>
      </View>

      <View className="mb-6">
        <Text className="mb-2 font-medium">Link Variant</Text>

        <View className="flex-row gap-4 flex-wrap">
          <Icon library="Feather" name="link" size="md" variant="link" />

          <Icon
            library="Feather"
            name="external-link"
            size="md"
            variant="link"
          />

          <Icon library="Feather" name="share" size="md" variant="link" />
        </View>
      </View>
    </View>
  );
};
