import { View, ScrollView, SafeAreaView } from 'react-native';
import { ThemeSwitcherButton } from '@/components/features/theme-switcher-button';
import { TextExample } from '@/components/examples/text-example';
import { CardExample } from '@/components/examples/card-example';
import { ButtonExample } from '@/components/examples/button-example';
import { IconExample } from '@/components/examples/icon-example';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Stack } from 'expo-router';

const Index = () => {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />

      <Card rounded={false} className="w-full p-4">
        <Text className="my-2 text-lg font-bold text-center">
          UI Components
        </Text>

        <View className="mb-4">
          <ThemeSwitcherButton />
        </View>
      </Card>

      <ScrollView className="p-4">
        <CardExample />
        <TextExample />
        <IconExample />
        <ButtonExample />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
