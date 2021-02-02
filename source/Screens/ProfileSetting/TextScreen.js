import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, CheckBox, Divider, Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import InputField from '../../Components/InputField';
import {ScrollView} from 'react-native';
import CustomButton from '../../Components/CustomButton';

class TextScreen extends Component {
  state = {
    path: '',
    checked: false,
    name: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    enterName: false,
    enterEmail: false,
    enterOldPassword: false,
    enterNewPassword: false,
    confirmNewPassword: false,
    isValidName: false,
    isValidEmail: false,
    isValidPassword: false,
    passwordMatch: false,
  };
  CheckBox() {
    this.state.checked === false
      ? this.setState({checked: true})
      : this.setState({checked: false});
  }
  pickImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.setState({path: image.path});
    });
  }
  validName() {
    if (this.state.name.length < 6) {
      this.setState({isValidName: true});
    } else null;
  }
  validPassword() {
    if (this.state.confirmPassword !== this.state.newPassword) {
      this.setState({confirmPassword: true});
    } else {
      null;
    }
  }

  validEmail(val) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email,
      )
    ) {
      null;
    } else this.setState({isValidEmail: true});
  }
  validation() {
    const {name, email, oldPassword, newPassword, confirmPassword} = this.state;
    if (name === '') {
      this.setState({enterName: true});
    } else {
      this.setState({enterName: false});
    }
    if (email === '') {
      this.setState({enterEmail: true});
    } else {
      this.setState({enterEmail: false});
    }
    if (oldPassword === '') {
      this.setState({enterOldPassword: true});
    } else {
      this.setState({enterOldPassword: false});
    }
    if (newPassword === '') {
      this.setState({enterNewPassword: true});
    } else {
      this.setState({enterNewPassword: false});
    }
    if (confirmPassword === '') {
      this.setState({confirmNewPassword: true});
    } else {
      this.setState({confirmNewPassword: false});
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.headerText}>Profile Setting</Text>
        <Divider style={{height: 1}} />
        <View style={styles.picView}>
          <View style={styles.imageView}>
            <Image
              style={styles.ImageBack}
              source={
                this.state.path === ''
                  ? require('./../../Assets/placeHolder.png')
                  : {uri: this.state.path}
              }
            />
            <TouchableOpacity
              style={styles.iconView}
              onPress={() => {
                this.pickImage();
              }}>
              <Icon name="edit" type="entypo" color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{width: '85%', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
            }}>
            <InputField
              placeholder={'Lorem Ipsum'}
              inputType={'name'}
              onEndEditing={(e) => this.validName(e.nativeEvent.text)}
              onChange={(text) => {
                this.setState({name: text});
                this.setState({enterName: false});
                this.setState({isValidName: false});
              }}
            />
            <Icon
              name="edit"
              type="entypo"
              onPress={() => {
                alert('hello');
              }}
            />
          </View>
          {this.state.enterOldPassword === false ? null : (
            <Text style={styles.errorMsg}>Enter the name.</Text>
          )}
          {this.state.isValidName === false ? null : (
            <Text style={styles.errorMsg}>
              Your name must be at-least 6 digit
            </Text>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
            }}>
            <InputField
              placeholder={'abd@gmail.com'}
              inputType={'name'}
              onEndEditing={(e) => this.validEmail(e.nativeEvent.text)}
              onChange={(text) => {
                this.setState({email: text});
                this.setState({enterEmail: false});
                this.setState({isValidEmail: false});
              }}
            />

            <Icon
              name="edit"
              type="entypo"
              onPress={() => {
                alert('hello');
              }}
            />
          </View>
          {this.state.enterEmail === false ? null : (
            <Text style={styles.errorMsg}>Enter the Email.</Text>
          )}
          {this.state.isValidEmail === false ? null : (
            <Text style={styles.errorMsg}>Email format is wrong</Text>
          )}

          <InputField
            placeholder={'Old password'}
            inputType={'Password'}
            borderBottomWidth={1}
            onEndEditing={(e) => this.validPassword(e.nativeEvent.text)}
            onChange={(text) => {
              this.setState({oldPassword: text});
              this.setState({enterOldPassword: false});
            }}
          />
          {this.state.enterOldPassword === false ? null : (
            <Text style={styles.errorMsg}>Enter the Password.</Text>
          )}
          {/* {this.state.isValidPassword === true ? null : (
            <Text style={styles.errorMsg}>Your password is incorrect.</Text>
          )} */}

          <InputField
            placeholder={'New Password'}
            inputType={'Password'}
            borderBottomWidth={1}
            onChange={(text) => {
              this.setState({newPassword: text});
              this.setState({enterNewPassword: false});
            }}
          />
          {this.state.enterNewPassword === false ? null : (
            <Text style={styles.errorMsg}>Enter the password.</Text>
          )}
          <InputField
            placeholder={'Confirm Password'}
            inputType={'Password'}
            borderBottomWidth={1}
            onEndEditing={(e) => this.validPassword(e.nativeEvent.text)}
            onChange={(text) => {
              this.setState({confirmPassword: text});
              this.setState({confirmNewPassword: false});
            }}
          />
          {this.state.confirmNewPassword === false ? null : (
            <Text style={styles.errorMsg}>Confirm the Password.</Text>
          )}
          {this.state.isValidPassword === false ? null : (
            <Text style={styles.errorMsg}>Your password is did'nt match.</Text>
          )}

          <CheckBox
            iconRight={false}
            uncheckedColor="black"
            checkedColor="black"
            title={`Don't send Notification`}
            textStyle={{fontSize: 20, fontWeight: 'normal'}}
            onIconPress={() => {
              this.CheckBox();
            }}
            size={30}
            checked={this.state.checked}
          />
          <CustomButton
            text={'Update'}
            width={'100%'}
            onPress={() => this.validation()}
          />
        </ScrollView>
      </View>
    );
  }
}
export default TextScreen;
