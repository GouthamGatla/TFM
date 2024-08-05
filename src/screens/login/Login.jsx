/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {TFMColors} from '../../themes/Color';
import {scaleFactor} from '../../utils/Responsive';
import {Card} from 'react-native-paper';
import {TextInputComponent} from '../../components/TextInputComponents';
import {ButtonComponent} from '../../components/ButtonComponent';

const LoginPage = () => {
  return (
    <View style={style.loginPageContainer}>
      <View style={style.loginLogoContainer}>
        {/* <Text style={style.loginLogo}> Tasty Food Munch </Text> */}
        <Image source={require('../../../assets/images/TFMLogo.png')} />
        <Image source={require('../../../assets/images/TFMLogoName.png')} />
      </View>
      <View style={style.cardContainer}>
        <Card style={style.loginCardColor}>
          <Card.Content style={style.cardContentContainer}>
            <Text style={style.cardText}>Login</Text>
            <TextInputComponent label="Mobile Number" />
            <ButtonComponent />
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    backgroundColor: TFMColors.primary,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: '80%',
    backgroundColor: TFMColors.secondaryColor,
    borderTopEndRadius: 40 * scaleFactor,
    borderTopLeftRadius: 40 * scaleFactor,
    // paddingTop : 60 * scaleFactor,
    // padding : 40 * scaleFactor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCardColor: {
    backgroundColor: TFMColors.primary,
    height: '80%',
    width: '90%',
  },
  cardText: {
    fontSize: 24 * scaleFactor,
    fontFamily: 'DMSans-SemiBold',
    color: TFMColors.textColor,
  },
  cardContentContainer : {
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
  },
});

export default LoginPage;
