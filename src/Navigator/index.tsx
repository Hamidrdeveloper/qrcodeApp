import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import CouponsScreen from '../screens/coupons';
import AktionenScreen from '../screens/aktionen';
import {View, Image} from 'react-native';
import qrCode from '../assets/image/qrcoder2.png';

import bootmFure from '../assets/image/bootmFure.png';
import bottomOne from '../assets/image/bottomOne.png';
import BottomTwo from '../assets/image/BottomTwo.png';
import bottomFive from '../assets/image/bottomFive.png';
import bootmFureG from '../assets/image/botomfurG.png';
import bottomOneG from '../assets/image/bottomOneG.png';
import BottomTwoG from '../assets/image/bottomTwoG.png';
import bottomFiveG from '../assets/image/bottomFiveG.png';
import QrCodeScreen from '../screens/qrCode';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../screens/rigester';

const Tab = createBottomTabNavigator();
const customTabBarStyle = {
  activeTintColor: '#000',
  inactiveTintColor: 'gray',

  style: {backgroundColor: 'white', height: 50},
};
const Stack = createNativeStackNavigator();
const Slack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <Slack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SignIn"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={Tap}
          options={{
            headerShown: false,
          }}
        />
      </Slack.Navigator>
    </NavigationContainer>
  );
}

function Tap() {
  return (
    <Tab.Navigator
      tabBarOptions={customTabBarStyle}
      shifting="false"
      options={{headerShadowVisible: false}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Aktuell',
          tabBarIcon: ({color,focused}) => 
          {
            return (
              <>
                {focused ? (
                  <Image style={{height: 25, width: 25}} source={bottomOne} />
                ) : (
                  <Image style={{height: 25, width: 25}} source={bottomOneG} />
                )}
              </>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Coupons',
          tabBarIcon: ({color, focused}) => {
            return (
              <>
                {focused ? (
                  <Image style={{height: 25, width: 25}} source={BottomTwo} />
                ) : (
                  <Image style={{height: 25, width: 25}} source={BottomTwoG} />
                )}
              </>
            );
          },
        }}
        name="Settings"
        component={CouponsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ea3a3c',
              }}>
              <Image style={{height: 25, width: 25}} source={qrCode} />
            </View>
          ),
        }}
        name="Settings2"
        component={QrCodeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Aktionen',
          tabBarIcon: ({color,focused}) => 
          {
            return (
              <>
                {focused ? (
                  <Image style={{height: 25, width: 25}} source={bootmFure} />
                ) : (
                  <Image style={{height: 25, width: 25}} source={bootmFureG} />
                )}
              </>
            );
          },
        }}
        name="Settings3"
        component={AktionenScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Service',
          tabBarIcon: ({color,focused}) => 
          {
            return (
              <>
                {focused ? (
                  <Image style={{height: 25, width: 25}} source={bottomFive} />
                ) : (
                  <Image style={{height: 25, width: 25}} source={bottomFiveG} />
                )}
              </>
            );
          },
        }}
        name="Settings4"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}
