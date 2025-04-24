import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export const ButtonExample = () => {
  return (
    <ScrollView className="mt-6">
      <Text className="text-xl font-bold mb-6">Button Examples</Text>

      <Text className="font-bold mb-3">Button Variants</Text>

      <View className="mb-6 gap-3 flex-row flex-wrap">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
      </View>

      <Text className="font-bold mb-3">Button Sizes</Text>

      <View className="mb-6 gap-3 flex-row flex-wrap">
        <Button size="sm">Small Button</Button>
        <Button>Default Button</Button>
        <Button size="lg">Large Button</Button>
      </View>

      <Text className="font-bold mb-3">Block Buttons</Text>

      <View className="mb-6 gap-3">
        <Button block>Block Default</Button>

        <Button variant="success" block>
          Block Success
        </Button>

        <Button variant="warning" block>
          Block Warning
        </Button>

        <Button variant="danger" block>
          Block Danger
        </Button>

        <Button variant="outline" block>
          Block Outline
        </Button>

        <Button variant="ghost" block>
          Block Ghost
        </Button>

        <Button variant="link" block>
          Block Link
        </Button>
      </View>

      <Text className="font-bold mb-3">Prefix Buttons</Text>

      <View className="mb-6 gap-3">
        <Button
          prefix={
            <Icon library="Feather" name="plus" size="sm" color="white" />
          }
        >
          Default with Prefix
        </Button>

        <Button
          variant="success"
          prefix={
            <Icon
              library="Feather"
              name="check-circle"
              size="sm"
              color="white"
            />
          }
        >
          Success with Prefix
        </Button>

        <Button
          variant="warning"
          prefix={
            <Icon
              library="Feather"
              name="alert-triangle"
              size="sm"
              color="white"
            />
          }
        >
          Warning with Prefix
        </Button>

        <Button
          variant="danger"
          prefix={
            <Icon library="Feather" name="trash-2" size="sm" color="white" />
          }
        >
          Danger with Prefix
        </Button>

        <Button
          variant="outline"
          prefix={<Icon library="Feather" name="edit-2" size="sm" />}
        >
          Outline with Prefix
        </Button>

        <Button
          variant="ghost"
          prefix={<Icon library="Feather" name="settings" size="sm" />}
        >
          Ghost with Prefix
        </Button>

        <Button
          variant="link"
          prefix={
            <Icon library="Feather" name="info" size="sm" color="#3b82f6" />
          }
        >
          Link with Prefix
        </Button>
      </View>

      <Text className="font-bold mb-3">Suffix Buttons</Text>

      <View className="mb-6 gap-3">
        <Button
          suffix={
            <Icon
              library="MaterialIcons"
              name="arrow-forward"
              size="sm"
              color="white"
            />
          }
        >
          Default with Suffix
        </Button>

        <Button
          variant="success"
          suffix={
            <Icon
              library="MaterialIcons"
              name="done-all"
              size="sm"
              color="white"
            />
          }
        >
          Success with Suffix
        </Button>

        <Button
          variant="warning"
          suffix={
            <Icon library="Ionicons" name="warning" size="sm" color="white" />
          }
        >
          Warning with Suffix
        </Button>

        <Button
          variant="danger"
          suffix={
            <Icon
              library="MaterialIcons"
              name="cancel"
              size="sm"
              color="white"
            />
          }
        >
          Danger with Suffix
        </Button>

        <Button
          variant="outline"
          suffix={<Icon library="Feather" name="external-link" size="sm" />}
        >
          Outline with Suffix
        </Button>

        <Button
          variant="ghost"
          suffix={<Icon library="MaterialIcons" name="more-horiz" size="sm" />}
        >
          Ghost with Suffix
        </Button>

        <Button
          variant="link"
          suffix={
            <Icon
              library="Feather"
              name="external-link"
              size="sm"
              color="#3b82f6"
            />
          }
        >
          Link with Suffix
        </Button>
      </View>

      <Text className="font-bold mb-3">Disabled Buttons</Text>

      <View className="mb-6 gap-3 flex-row flex-wrap">
        <View className="mr-2 mb-2">
          <Button disabled>Disabled Default</Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="success" disabled>
            Disabled Success
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="warning" disabled>
            Disabled Warning
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="ghost" disabled>
            Disabled Ghost
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="link" disabled>
            Disabled Link
          </Button>
        </View>
      </View>

      <Text className="font-bold mb-3">Loading Buttons</Text>

      <View className="mb-6 gap-3 flex-row flex-wrap">
        <View className="mr-2 mb-2">
          <Button loading>Loading Default</Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="success" loading>
            Loading Success
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="warning" loading>
            Loading Warning
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="danger" loading>
            Loading Danger
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="outline" loading>
            Loading Outline
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="ghost" loading>
            Loading Ghost
          </Button>
        </View>

        <View className="mr-2 mb-2">
          <Button variant="link" loading>
            Loading Link
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
