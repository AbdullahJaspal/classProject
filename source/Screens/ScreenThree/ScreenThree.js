import React, { Component } from 'react';
import {ImageBackground, StyleSheet,View, Text, Button, TouchableHighlight, TouchableNativeFeedback , Platform} from 'react-native';
import styles from './styles';
class ScreenThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 
  render() {
    return (
        <View style= {styles.containerMain} >
        <ImageBackground source={require('./../../Assets/backgroungImage.jpg')} style={styles.containerBImage}>
          <Text
          style= {styles.containerText}>______{"\n"}11:16{"\n"}
             <Text
          style= {styles.containerText1}>Friday,{"\n"}December 25{"\n"}__________
          </Text>
          </Text>
               
       
       
        <View style = {styles.styleButton}>        
        
        
        <Text style= {styles.containerText1}>
            three
        </Text>
        <Text style= {styles.containerText1}>
            four
        </Text>
        <Text style= {styles.containerText1}>
            five
        </Text>
        <Text style= {styles.containerText1}>
            five
        </Text><Text style= {styles.containerText1}>
            five
        </Text>
        </View>
        </ImageBackground>
        
      </View>
    );
  }
}

export default ScreenThree;
