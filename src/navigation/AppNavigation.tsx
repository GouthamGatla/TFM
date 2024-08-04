/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import { Routes } from './AppRoutes';
import LoginPage from '../screens/login/Login';
import { TFMColors } from '../themes/Color';

const Stack = createNativeStackNavigator();
// const splashGIF = require('../../assets/images/splashgif.gif')

export const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate(Routes.loginScreen);
  }, 3000);

  return (
    <View style={style.splashContainer}>
      {/* <ImageBackground
      style={style.gif}
        source={splashGIF}
      /> */}
      <View style={style.lottieContainer}>
        <LottieView style={style.gif} source={require('../../assets/Json/splash.json')} autoPlay loop />
      </View>
    </View>
  );
};

const AppNavigtion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name={Routes.splashScreen}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.loginScreen}
          component={LoginPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const style = StyleSheet.create({
  splashContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : TFMColors.primary,
  },
  gif : {
    height : 300,
    width : 300,
    // backgroundColor : "#F7931E",
  },
  lottieContainer : {
    backgroundColor : TFMColors.secondaryColor,
    borderRadius : 150,
  }
})
export default AppNavigtion;
