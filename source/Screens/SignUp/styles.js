import react,{Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
    containerBImage:
    {
        width: width,
        height: height,
        
    },
    containerImage:
    {
        width:120,
        height:60,
        alignSelf:'center'
    },
    containerText:
    {
        
        textAlignVertical:'bottom',
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
    containerButton:
    {
        fontWeight:'bold',
        margin:12,
        width:"75%",
        backgroundColor:'white',
        color:'#db2b5b',
        borderRadius:35,
        fontSize:22,
        textAlignVertical:'center',
        flexDirection:'row',
        padding: 15,
        textAlign:'left',
    },
    containerText2:
    {
        marginTop:5,
        color:'white',
        borderBottomWidth:1,
        borderBottomColor:'white',

    },
    containerSignUp:
    {
        width:"75%",
        backgroundColor:'white',
        color:'#f0f',
        borderRadius:35,
        fontSize:22,
        justifyContent: 'center',
        flexDirection:'row',
        margin:10,
        padding: 15,
        textAlignVertical:'center',
        textAlign:'center',
    }
   
} )
export default styles;