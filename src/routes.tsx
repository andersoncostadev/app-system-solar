import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./screens/Home";
import Planets from "./screens/Planets";

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator
    initialRouteName="Home"
    screenOptions={{
    tabBarActiveTintColor: "#873679",
    tabBarInactiveTintColor: "#212121ea"
  }}
    >
     <Tabs.Screen 
        name="Home"
        options={{
        tabBarLabel: "Home",
        tabBarIcon:({color, size})=> (
          <MaterialCommunityIcons 
            name= "home" 
            color= {color} 
            size={size}
            />
        )
      }}
      component={Home}/>

<Tabs.Screen 
        name="Planetas"
        options={{
        tabBarLabel: "Planets",
        tabBarIcon:({color, size})=> (
          <MaterialCommunityIcons 
            name= "earth-arrow-right" 
            color= {color} 
            size={size}
            />
        )
      }}
      component={Planets}/>
    </Tabs.Navigator>
  )
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
     <NavigationTabs/>
    </NavigationContainer>
  );
};

export default Routes;