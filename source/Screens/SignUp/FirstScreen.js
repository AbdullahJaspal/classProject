import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import styles from './styles';

class FirstScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('./../../Assets/backImage.jpg')}
          style={styles.containerBImage}>
          <View style={{flex: 0.4, justifyContent: 'center'}}>
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
          <View style={{flex: 0.05}} />
          <View style={{flex: 0.55, alignItems: 'center'}}>
            <Text
              style={styles.containerButton}
              onPress={() => alert('Simple Button pressed')}>
              <Image
                style={{height: 25, width: 20}}
                source={require('./../../Assets/fLogo.png')}></Image>{' '}
              | Sign In with Facebook
            </Text>
            <Text
              style={styles.containerButton}
              onPress={() => alert('Simple Button pressed')}>
              <Image
                style={{height: 25, width: 20}}
                source={require('./../../Assets/tLogo.png')}></Image>{' '}
              | Sign In with Twitter
            </Text>
            <Text
              style={styles.containerSignUp}
              onPress={() => alert('Simple Button pressed')}>
              Sign Up
            </Text>
            <Text
              onPress={() => alert('Simple Button pressed')}
              style={styles.containerText2}>
              Already have an account ? Sign In
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default FirstScreen;
