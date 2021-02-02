import react , {Component} from 'react';
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:
    {
        flex :1,
        // justifyContent: 'center',
    },
    containerBImage:
    {
        // alignContent:'center',
        width: 410,
        height: 660,
    },
    containerText:
    {
        // color:'green',
        marginTop:30,
        fontSize:50,
        textAlign:'center',
    },
    containerText1:
    {
        width:58,
        height:40,
        // backgroundColor:'white',
        color:'green',
        marginTop:10,
        fontSize:25,
        textAlign:'center',
    },
    styleButton:
    {
        position:'relative',
        flex:0.50,
        // alignItems:'stretch',
        // backgroundColor:'red',
        // flexWrap:'wrap-reverse',
        justifyContent:'space-between',
        flexDirection:'row',
        // alignItems:'stretch',
        // flexgrow:1.0,
    },
    containerButton:
    {
        margin:10,
        // alignContent:'center',
        width: 100,
        // alignItems: 'center',
        backgroundColor: 'purple'
    }

});

export default styles;