/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scaleFactor} from '../utils/Responsive';
import {TFMColors} from '../themes/Color';

interface TextInputProps {
  label: string;
}

export const TextInputComponent: React.FC<TextInputProps> = ({
  label,
}: TextInputProps) => {
  return (
    <View>
      <Text style={style.inputLabel}> {label} </Text>
      <TextInput style={style.input} />
    </View>
  );
};

export const style = StyleSheet.create({
  inputLabel: {
    fontSize: 12 * scaleFactor,
    fontWeight : '600',
  },
  input: {
    height: 40 * scaleFactor,
    backgroundColor: TFMColors.inputBackground,
    marginTop: 16 * scaleFactor,
  },
});
