import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from './styles';

class ThirdScreen extends Component {
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
          <Text style={styles.containerText2}>SIGN IN</Text>

          <View style={{flex: 0.25, width: '80%', alignSelf: 'center'}}>
            <TextInput style={styles.styleInput}>Email</TextInput>
            <TextInput style={styles.styleInput}>Re-Enter Password</TextInput>
            <Text style={styles.styleText}>Remember Password</Text>
          </View>
          <View style={{flex: 0.25, alignItems: 'center'}}>
            <Text style={styles.containerCButton2}>Get Started</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={styles.containerCButton}
                source={require('./../../Assets/fLogo.png')}></Image>
              <Text>. .</Text>

              <Image
                style={styles.containerCButton}
                source={require('./../../Assets/tLogo.png')}></Image>
            </View>
            <Text style={styles.styleText2}>Forget Password?</Text>
          </View>
          <View style={{flex: 0.1, backgroundColor: '#db2b5b'}}>
            <Text style={{color: 'orange', textAlign: 'center'}}>
              Don't have an Account?
              <Text style={{color: 'white'}}>Log In</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default ThirdScreen;
