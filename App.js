import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FirstScreen from './source/Screens/SignUp/FirstScreen';
import ScondScreen from './source/Screens/SignUpPage/ScondScreen';
import ThirdScreen from './source/Screens/SignIn/ThirdScreen';
import ScreenFour from './source/Screens/AccountsPage/ScreenFour';
import ScreenFive from './source/Screens/AccountDetail/ScreenFive';
import ScreenSix from './source/Screens/Restaurants/ScreenSix';
import ScreenSeven from './source/Screens/ImagePicker/ScreenSeven';
import Screen8 from './source/Screens/Sneakers/Screen8';
import IntroSlider from './source/Screens/IntroSlider/IntroSlider';
import DocPicker from './source/Screens/docPicker/DocPicker';
import TextScreen from './source/Screens/ProfileSetting/TextScreen';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FirstScreen/>
      // <ScondScreen/>
      // <ThirdScreen/>
      // <ScreenFour/>
      // <ScreenFive />
      // <ScreenSix />
      // <ScreenSeven />
      // <Screen8/>
      // <IntroSlider/>
      // <DocPicker/>
      //  <TextScreen/>
    );
  }
}

export default App;
