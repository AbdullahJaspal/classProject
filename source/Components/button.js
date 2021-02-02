import React, {Component} from 'react';
import {StyleSheet, View, View as RNButton} from 'react-native';
import styles from '../Screens/ImagePicker/styles';

export function Button({title, onPress, color}) {
  return (
    <View style={styles.container}>
      <RNButton onPress={onPress} color={color} />
    </View>
  );
}

export default Button;
