import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from './../SignUpPage/Styles';

class ScondScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('./../../Assets/backImage.jpg')}
          style={styles.containerBImage}>
          <View style={{flex: 0.35, justifyContent: 'center'}}>
            <Image
              source={require('./../../Assets/logos.png')}
              style={styles.containerImage}></Image>
            <Text style={styles.containerText}>
              CONN
              <Text style={{color: 'white'}}>EXION</Text>
            </Text>
            <Text style={styles.containerText1}>
              Find and Meet People around{'\n'}you to find LOVE
            </Text>
          </View>
          <Text style={styles.containerText2}>CREATE YOUR LOGIN</Text>

          <View style={{flex: 0.35, width: '80%', alignSelf: 'center'}}>
            <TextInput style={styles.styleInput}>Jamie Morvich</TextInput>
            <TextInput style={styles.styleInput}>
              E-mail (abc@gmail.com)
            </TextInput>
            <TextInput style={styles.styleInput}>Enter Password</TextInput>
            <TextInput style={styles.styleInput}>Re-Enter Password</TextInput>
            <Text style={styles.styleText}>Agree to Terms And Condition</Text>
          </View>
          <View style={{flex: 0.25, width: '80%', alignSelf: 'center'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.containerCButton}>Cancel</Text>
              <Text style={styles.containerCButton2}>Save</Text>
            </View>
            <Text style={styles.styleText1}>Agree to Terms And Condition</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default ScondScreen;
