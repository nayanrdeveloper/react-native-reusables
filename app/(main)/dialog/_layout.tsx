import { Tabs } from 'expo-router';
import { Copy, Merge, ToyBrick } from 'lucide-react-native';

export default function DialogTabsLayout() {
  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Reusable',
          tabBarIcon({ color, size }) {
            return <Copy color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name='dialog-primitive'
        options={{
          title: 'Primitive',
          tabBarIcon({ color, size }) {
            return <ToyBrick color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name='dialog-universal'
        options={{
          title: 'Universal',
          tabBarIcon({ color, size }) {
            return <Merge color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}

type RootTabs = React.ComponentProps<typeof Tabs>;
type ScreenOptions = RootTabs['screenOptions'];

const screenOptions: ScreenOptions = {
  headerShown: false,
};
