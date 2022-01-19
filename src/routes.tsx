import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../src/screens/Home';
import Planets from '../src/screens/Planets';
import Details from '../src/screens/Details';

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#875AFD',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {fontSize: 15},
        tabBarStyle: {backgroundColor: '#000'},
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={Home}
      />

      <Tabs.Screen
        name="Planets"
        options={{
          headerShown: false,
          tabBarLabel: 'Planets',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="earth-arrow-right"
              color={color}
              size={size}
            />
          ),
        }}
        component={Planets}
      />

      <Tabs.Screen
        name="Details"
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="earth-plus"
              color={color}
              size={size}
            />
          ),
        }}
        component={Details}
      />
    </Tabs.Navigator>
  );
};

const Routes: React.FC = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 255, 255)',
      card: '#875AFD',
      background: '#000000',
      text: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <NavigationTabs />
    </NavigationContainer>
  );
};

export default Routes;
