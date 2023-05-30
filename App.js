import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth, setDoc, db, doc, } from "./firebase";

import Splash from './src/screen/Splash';
import BottomTab from './src/component/BottomTab';
import DangNhap from './src/screen/DangNhap';
import DangKy from './src/screen/DangKy';
import QuenMatKhau from './src/screen/QuenMatKhau';
import Menu from './src/screen/Menu';
import OrderConfirm from './src/screen/OrderConfirm';
import OrderHistory from './src/screen/OrderHistory';
import OrderTracking from './src/screen/OrderTracking';
import OrderManagement from './src/screen/OrderManagement';
import Home from './src/screen/Home';
import FoodDetail from './src/screen/FoodDetail';
import ReviewDescription from './src/screen/Rating/ReviewDescription';
import Account from './src/screen/Account';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const Stack = createStackNavigator();
  console.log(Stack);
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <SafeAreaView style={{ flex: 1, }}>
          {/* <StatusBar style='light' /> */}
          <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            {loggedIn ? (
              <Stack.Screen name="BottomTab" component={BottomTab} />
            ) : (
              <Stack.Group>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="DangNhap" component={DangNhap} />
                <Stack.Screen name="DangKy" component={DangKy} />
                <Stack.Screen name="QuenMatKhau" component={QuenMatKhau} />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  )
};

export default App;