import {Image, Dimensions, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import Setting from '../screens/Setting';
import MyTeam from '../screens/MyTeam';
import MySpace from '../screens/MySpace';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from "react-native-vector-icons/Feather"
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('screen');
const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MySpace"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#f97316',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '800',
          },
          tabBarStyle: {
            height: height * 0.08,
            backgroundColor: '#f4f6f8',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    borderRadius: 100,
                    borderWidth: 2,
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: focused ? '#f97316' : '#f4f6f8',
                  }}>
                  <Foundation
                    name="home"
                    color={focused ? '#f97316' : '#637381'}
                    size={16}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="MySpace"
          component={MySpace}
          options={{
            tabBarLabel: 'My Space',
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    borderRadius: 100,
                    borderWidth: 2,
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: focused ? '#f97316' : '#f4f6f8',
                  }}>
                  <Image
                    style={{height: 16, width: 16}}
                    source={require('../assets/woman.png')}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="MyTeam"
          component={MyTeam}
          options={{
            tabBarLabel: 'MyTeam',
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    borderRadius: 100,
                    borderWidth: 2,
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: focused ? '#f97316' : '#f4f6f8',
                  }}>
                  <FontAwesome
                    name="users"
                    color={focused ? '#f97316' : '#637381'}
                    size={16}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    borderRadius: 100,
                    borderWidth: 2,
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: focused ? '#f97316' : '#f4f6f8',
                  }}>
                  <Feather
                    name="settings"
                    color={focused ? '#f97316' : '#637381'}
                    size={16}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Main;
