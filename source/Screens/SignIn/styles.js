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
        width:10,
        height:10,
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius: 50,
        padding: 35,
        
    },
    containerCButton2:
    {
        margin:15,
        width:'80%',
        textAlign:'center',
        backgroundColor:'white',
        fontSize:30,
        color:'#db2b5b',
        borderBottomColor:'white' ,
        borderRadius:35,
        padding: 15,
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
    },
    styleText2:
    {
        color:'white',
        marginTop:20,
        alignSelf:"center",
        borderBottomColor:'white',
        borderBottomWidth:0.5,
        width:'28%',
        fontSize:15
    }
})
export default styles;