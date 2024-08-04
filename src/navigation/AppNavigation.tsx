/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Stack = createNativeStackNavigator();
const splashGIF = require('../../assets/images/splashgif.gif')

export const ProfileScreen = () => {
  return <Text> ProfileScreen </Text>;
};

export const SplashScreen = ({navigation}: any) => {
//   setTimeout(() => {
//     navigation.navigate('Home');
//   }, 3000);

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
          name="splashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={ProfileScreen}
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
    backgroundColor : '#ffffff',
  },
  gif : {
    height : 300,
    width : 300,
    // backgroundColor : "#F7931E",
  },
  lottieContainer : {
    backgroundColor : '#F7931E',
    borderRadius : 150,
  }
})
export default AppNavigtion;
