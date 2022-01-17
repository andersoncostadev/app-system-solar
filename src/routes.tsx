import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
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
        tabBarActiveTintColor: '#873679',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {fontSize: 15},
        tabBarStyle: {backgroundColor: '#000'},
      }}>
      <Tabs.Screen
        name="Home"
        options={{
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
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};

export default Routes;

// import React from "react";

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import Planets from "./Screens/Planets";
// import Details from "./Screens/Details";

// const Routes: React.FC = () => {
//   const Stack = createStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Planets"component={Planets}/>
//         <Stack.Screen name="Details"component={Details}/>
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// };

// export default Routes;
