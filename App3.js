import * as React from 'react';
import {View, Button, Text, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App5 from './App5';
import Login from './Login';
import Main from './Main';
import Splace from './src/Splace';
import order from './src/order';
import chat from './src/chat';
import tracking from './src/tracking';

function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    // screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Splace"
        component={Splace}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerStyleInterpolator: forFade}}
      />

      <Stack.Screen
        name="App5"
        component={App5}
        // options={{headerStyleInterpolator: forFade}}
      />
      <Stack.Screen name="order" component={order} />
      <Stack.Screen name="chat" component={chat} />
      <Stack.Screen name="tracking" component={tracking} />
    </Stack.Navigator>
  );
}

export default function App3() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
