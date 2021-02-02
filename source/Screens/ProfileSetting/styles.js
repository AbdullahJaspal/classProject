import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imageView: {
    flexDirection: 'row',
    borderRadius: 100,
    height: 150,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBack: {
    width: 130,
    height: 130,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    borderRadius: 200,
    // backgroundColor:'red'
  },
  editIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 33,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  iconView: {
    margin: -30,
    marginTop: 40,
    backgroundColor: 'black',
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:
  {
    fontSize: 25,
    borderBottomWidth:1,
  },
  Button:
  {
    marginTop:20,
    alignItems:'center',
    backgroundColor:'black',
    height:70,
    justifyContent:'center'
  },
  buttonText:
  {
    color:'white',
    fontSize:30
  },
  errorMsg:
  {
 color:'red',
 marginLeft:10,
  },
});
export default styles;
