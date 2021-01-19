import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, UsedBooksPage, CartPage } from './pages';

interface TabBarIconOptions {
  focused: boolean;
  color: string;
  size: number;
}

const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const RootNavigation: FC = () => (
  <NavigationContainer>
    <Tabs.Navigator
      appearence={{
        floating: true,
        shadow: true,
      }}
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#000',
      }}
    >
      <Tabs.Screen
        name="Todos"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconOptions) => (
            <AntDesign
              name="home"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Usados"
        component={UsedBooksPage}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconOptions) => (
            <AntDesign
              name="laptop"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Carrinho"
        component={CartPage}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconOptions) => (
            <AntDesign
              name="shoppingcart"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
