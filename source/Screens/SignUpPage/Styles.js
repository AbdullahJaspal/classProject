import react,{Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native';
const {width,height,} = Dimensions.get('window');

const styles = StyleSheet.create({
    containerBImage:
    {
        width: width,
        height: height,
    },
    containerImage:
    {
        alignSelf:'center',
        width:200,
        height:110,
        justifyContent:'flex-end'
    },
    containerText:
    {
        fontSize:35,
        textAlign:'center',
        color:'#db2b5b',
    },
    containerText1:
    {
        fontSize:13,
        textAlign:'center',
        color:'white',
    },
    containerText2:
    {
        flex:0.05,
        fontSize:25,
        textAlign:'center',
        color:'white',
    },
    containerCButton:
    {
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:30,
        color:'white',
        borderBottomColor:'white' ,
        width:'40%',
        
    },
    containerCButton2:
    {
        textAlign:'center',
        backgroundColor:'white',
        fontSize:30,
        color:'#db2b5b',
        borderBottomWidth:0.5,
        borderBottomColor:'white' ,
        padding: 15,
        width:'40%',
        borderRadius:35,
    },
    styleInput:
    {
        fontSize:15,
        marginBottom:7,
        marginTop:7,
        color:'white',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'white',
    },
   styleText:
    {
        color:'white',
        marginTop:10,
        textAlign:"right",
    },
    styleText1:
    {
        color:'white',
        marginTop:20,
        alignSelf:"center",
        borderBottomColor:'white',
        borderBottomWidth:0.5,
        width:'45%'
    }
})
export default styles;