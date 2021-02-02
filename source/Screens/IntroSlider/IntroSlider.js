import React, {Component} from 'react';
import {Image} from 'react-native';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ImageBackground} from 'react-native';

let data = [
  {
    key: 1,
    title: 'Title 1',
    image: require('./../../Assets/rolls.jpg'),
    text: 'Description.\nSay something cool',
    bgColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 1',
    image: require('./../../Assets/arbian.jpg'),
    text: 'Other cool stuff',
    bgColor: '#febe29',
  },
  {
    key: 3,
    title: 'Title 1',
    image: require('./../../Assets/pizza.jpg'),
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    bgColor: '#febe29',
  },
  {
    key: 4,
    title: 'Title 1',
    image: require('./../../Assets/asian.jpg'),
    text: 'hello',
    bgColor: '#22bcb5',
  },
];

class IntroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({item}) => (
    <View style={[styles.mainCont, {backgroundColor: item.bgColor}]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.contImage} />
      <Text style={styles.contText}>{item.text}</Text>
    </View>
  );
  renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="navigate-next"
          type="material-icons"
          color="rgba(255, 255, 255, .9)"
          size={40}
        />
      </View>
    );
  };
  renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="navigate-before"
          type="material-icons"
          color="rgba(255, 255, 255, .9)"
          size={40}
        />
      </View>
    );
  };
  renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <Icon
        name="done"
        type="material-icons"
        color="rgba(255, 255, 255, .9)"
        size={40}
      />
    </View>
    );
  };
  onDone = ()=> {

    alert('ok');
  } 
  render() {
    state = {showRealApp: false};

    // return (
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this.renderItem}
          data={data}
          // bottomButton={[true]}
          onDone={this.onDone}
          showSkipButton={true}
          showPrevButton={true}
          showDoneButton={true}
          renderNextButton={this.renderNextButton}
          renderPrevButton={this.renderPrevButton}
          renderDoneButton={this.renderDoneButton}
        />
      );
    }
  }
}

export default IntroSlider;
