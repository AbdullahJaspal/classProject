import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

const styleTwo = StyleSheet.create(
{
    mainContainer:
    {
    flex:1,
    backgroundColor:'white',


    },
 
    containerName:
    {
        width:"100%",
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        marginTop:4,
    },
    containerW:
    {
        alignSelf:'center',
        width:'85%',
    },


   
    titleName:
    {
        fontSize:16,
        fontFamily:'serif',
    },

    titleSignIn:
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
export default styleTwo;