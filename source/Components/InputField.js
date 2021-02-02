import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {View, Text} from 'react-native';

const InputField = ({placeholder,onEndEditing, placeholderTextColor,inputType,borderBottomWidth, onChange}) => {
  return <TextInput 

style={{
borderBottomWidth:borderBottomWidth,
fontSize: 25,
padding: 20,
marginTop:10,

}}
onChangeText={onChange}
  placeholder={placeholder}
  placeholderTextColor={placeholderTextColor}
  inputType={inputType}
  onEndEditing={onEndEditing}
  />;
};
export default InputField;
