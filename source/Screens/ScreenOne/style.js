import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create(
{
    mainContainer:
    {
    flex:1,
    backgroundColor:'white',


    },
 
    containerThree:
    {
        width:"100%",
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
    },
    containerW:
    {
        alignSelf:'center',
        width:'85%',
    },


    titleOne:
    {
      marginTop:5,
      marginBottom:25,
      fontSize:24,
      textAlign:'left',
      fontFamily:'serif',
    },
    titleTwo:
    {
        fontSize:16,
        fontFamily:'serif',
    },
    titleThree:
    {   
        marginTop:5,
    textAlign:'right',
    },
    titleFour:
    {   
    alignSelf:'center',
    },
    buttonStyle:
    {
        margin:40,
        alignSelf:"center",
        width:'100%',
    },
    headerImage:
    {
        width:"100%",
        height:220,

    },   
    
   


});
export default style;