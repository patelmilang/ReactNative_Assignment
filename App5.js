import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import order from './src/order';
import chat from './src/chat';
import tracking from './src/tracking';

const Tab = createBottomTabNavigator();

export default function App5() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Orders" component={order} />
        <Tab.Screen name="Chat" component={chat} />
        <Tab.Screen name="Track Order" component={tracking} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
