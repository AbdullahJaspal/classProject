import React, { Component } from 'react';
import {Button,Image,TextInput,ScrollView, View, Text, Group } from 'react-native';
import styleTwo from './styleTwo';
class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value :`User Name `,
      value1: `E.mail (abc@gmail.com)`,
      value2:`Password`,
      value3:`Confirm Password`
    };
  }

  render() {
    return (
      <View>
           <View>
          <Image 
          style = {styleTwo.headerImage}
          source= {require('./../../Assets/header.png')}
          />

        </View>
        
        <ScrollView>
        <View style = {styleTwo.containerW}>
        
      <View style= {styleTwo.containerName}>
        <Image
          source= {require('./../../Assets/Group.png')}
          />

          <TextInput
           style = {styleTwo.titleName}>
              {this.state.value}
          </TextInput>
        </View>

        <View style= {styleTwo.containerName}>
        <Image
          source= {require('./../../Assets/Group1.png')}
          />
          <TextInput
           style = {styleTwo.titleName}>
              {this.state.value1}
          </TextInput>
        </View>
        <View style= {styleTwo.containerName}>
        <Image
          source= {require('./../../Assets/Group.png')}
          />

          <TextInput
           style = {styleTwo.titleName}>
              {this.state.value2}
          </TextInput>
        </View>

        <View style= {styleTwo.containerName}>
        <Image
          source= {require('./../../Assets/Group1.png')}
          />
          <TextInput
           style = {styleTwo.titleName}>
              {this.state.value3}
          </TextInput>
        </View>
        <View style = {styleTwo.buttonStyle}>
        <Button
        title="Sign Up"
        color="black"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        </View>
        <View>
          <Text style= {styleTwo.titleSignIn}>
          Already have an account ? 
          <Text style ={{color:'red'}}> Sign In </Text>
          </Text>

        </View>
        </View>
        </ScrollView>
        </View>
    );
  }
}

export default ScreenTwo;

