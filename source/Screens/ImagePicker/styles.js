import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: '70%',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    alignSelf: 'center',
    width: '50%',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'yellow',
    textAlignVertical: 'center',
    borderRadius: 50,
  },
  buttonText1: {
    alignSelf: 'center',
    width: '60%',
    flex: 0.3,
    fontSize: 35,
    textAlign: 'center',
    backgroundColor:'yellow',
    borderWidth: 6,
    textAlignVertical: 'center',
    borderRadius: 20,
    borderColor:'black',
    marginTop: 20,
    borderColor: 'white',
  },
  image: {
    width:150,
    height:130,
    // flex: 0.5,
    borderWidth: 1,
    // backgroundColor: 'green',
    marginVertical: 24,
    // alignContent:'stretch'

  },
});
export default styles;
