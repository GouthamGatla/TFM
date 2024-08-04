/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

// to get screen height and width

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const scaleFactor = Dimensions.get('window').width / 360;

export {scaleFactor, maxHeight, maxWidth};
