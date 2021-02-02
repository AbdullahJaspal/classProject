import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
  },
  headerText1: {
    fontSize: 16,
  },
  Image: {
    flex: 0.35,
    alignSelf: 'center',
    width: '100%',
    height: height,
  },
  cardV: {
    flexDirection: 'row',
// alignContent:'space-between',
    alignItems:'center',
  },
  cardStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom:10,
   

  },
  cardText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 50,
    textAlign: 'center',
  },
  
});
export default styles;
