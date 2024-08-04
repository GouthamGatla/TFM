/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TFMColors} from '../../themes/Color';
import {scaleFactor} from '../../utils/Responsive';
import {Card, Button} from 'react-native-paper';

const LoginPage = () => {
  return (
    <View style={style.loginPageContainer}>
      <View style={style.loginLogoContainer}>
        <Text style={style.loginLogo}> Tasty Food Munch </Text>
      </View>
      <View style={style.cardContainer}>
        <Card style={style.loginCardColor}>
          <Card.Content>
            <Text style={style.cardText}>Login</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    backgroundColor: TFMColors.secondaryColor,
  },
  loginLogo: {
    color: TFMColors.primary,
    fontSize: 40 * scaleFactor,
    fontFamily: 'DMSans-ExtraLight',
    fontWeight: '600',
  },
  loginLogoContainer: {
    height: '20%',
    // backgroundColor : 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: '80%',
    backgroundColor: TFMColors.primary,
    borderTopEndRadius: 40 * scaleFactor,
    borderTopLeftRadius: 40 * scaleFactor,
    // paddingTop : 60 * scaleFactor,
    // padding : 40 * scaleFactor,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
  loginCardColor : {
    backgroundColor : TFMColors.primary,
    height : '70%',
    width : '90%',
  },
  cardText : {
    fontSize : 24 * scaleFactor,
    fontWeight : '500',
    fontFamily : 'DMSans-Light',
  },
});

export default LoginPage;
