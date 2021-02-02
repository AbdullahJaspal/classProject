import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({text, width, onPress}) => {
  return (
    <LinearGradient
      colors={['#545454', 'black']}
      style={{width: width, alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default CustomButton;
