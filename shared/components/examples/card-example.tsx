import React from 'react';
import { View } from 'react-native';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/shared/components/ui/Card';
import { Text } from '@/shared/components/ui/Text';

export function CardExample() {
  return (
    <View>
      <Text className="text-xl font-bold mb-6">Card Examples</Text>

      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">Default Card</Text>

        <Card>
          <CardHeader>
            <Text className="text-lg font-semibold">Card Header</Text>
          </CardHeader>

          <CardContent>
            <Text>
              This is the default card with rounded corners and small border.
            </Text>
          </CardContent>

          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">
          Flat Card (No Rounded Corners)
        </Text>

        <Card rounded={false} border="default">
          <CardHeader>
            <Text className="text-lg font-semibold">Flat Card</Text>
          </CardHeader>

          <CardContent>
            <Text>
              This card has no rounded corners but still has a medium border.
            </Text>
          </CardContent>

          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
      </View>
    </View>
  );
}
