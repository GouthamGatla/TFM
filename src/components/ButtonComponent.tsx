/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { scaleFactor } from '../utils/Responsive';
import { TFMColors } from '../themes/Color';

export const ButtonComponent = () => {
  return (
    <TouchableOpacity style={style.loginButton}>
        <Text style={{color : TFMColors.primary, fontWeight : '600'}}> Login </Text>
    </TouchableOpacity>
  );
};

export const style = StyleSheet.create({
    loginButton : {
        height : 40 * scaleFactor,
        backgroundColor : TFMColors.secondaryColor,
        borderRadius : 8 * scaleFactor,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },
});
