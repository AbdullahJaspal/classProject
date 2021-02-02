import React, {Component} from 'react';
import {Image, View, Text, TextInput, Button, ScrollView} from 'react-native';

class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discription: `HELLO THERE,\nWELLCOME BACK`,
      value: `\t\tUser Name `,
      value1: `\t\tPassword`,
    };
  }

  render() {
    return (
      <View style={style.mainContainer}>
        <View>
          <Image
            style={style.headerImage}
            source={require('./../../Assets/header.png')}
          />
        </View>
        <ScrollView>
          <View style={style.containerW}>
            <View>
              <Text style={style.titleOne}>{this.state.discription}</Text>
            </View>

            <View style={style.containerThree}>
              <Image source={require('./../../Assets/Group.png')} />
              <TextInput style={style.titleTwo}>{this.state.value}</TextInput>
            </View>

            <View style={style.containerThree}>
              <Image source={require('./../../Assets/Group1.png')} />
              <TextInput style={style.titleTwo}>{this.state.value1}</TextInput>
            </View>

            <View>
              <Text style={style.titleThree}>forget password?</Text>
            </View>
            <View style={style.buttonStyle}>
              <Button
                title="Login"
                color="black"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View>
              <Text style={style.titleFour}>
                New Here ?<Text style={{color: 'red'}}> Sign Up </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ScreenOne;
