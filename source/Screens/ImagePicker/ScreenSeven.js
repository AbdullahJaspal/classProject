import React, {Component} from 'react';
import {View, Text, Button, Image, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import styles from './../ImagePicker/styles';

const {width, height} = Dimensions.get('screen');

import * as ImagePicker from './../../../source/Components/button';

class ScreenSeven extends Component {
  state = {
    response: null,
  };
  camera() {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        this.setState({response: response});
      },
    );
  }
  gallery() {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        this.setState({response: response});
      },
    );
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            // backgroundColor: 'red',
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={styles.image}>
            {this.state.response && (
              <Image
                resizeMode="cover"
                style={{width: 150, height: 130}}
                source={{uri: this.state.response.uri}}
              />
            )}
          </View>
          <Text
            style={styles.buttonText}
            onPress={() => {
              this.RBSheet.open();
            }}>
            Upload a picture
          </Text>
        </View>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              // backgroundColor: 'black',
            },
          }}>
          <Text style={styles.buttonText1} onPress={() => this.camera()}>
            Open Camera
          </Text>
          <Text style={styles.buttonText1} onPress={() => this.gallery()}>
            Open Gallery
          </Text>
        </RBSheet>
      </View>
    );
  }
}

export default ScreenSeven;
