import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Icon, Card} from 'react-native-elements';
import styles from './styles';

const data = [
  {
    id: 1,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 2,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 3,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 4,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 5,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 6,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 7,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
  {
    id: 8,
    name: 'restaurant name',
    date: '23, aug 2020',
    price: '$ 76',
  },
];
const Item = ({item}) => (
  <View>
    <Card containerStyle={styles.cardStyle}>
      <View style={styles.cardV}>
        <View style={{flex: 0.13}}>
          <Icon name="wallet" type="entypo" size={35} />
        </View>
        <View style={{flex: 0.67, alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>
            {item.name}
            <Text style={styles.headerText1}>
              {'\n'}
              {item.date}
            </Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 0.2}}>
          <Icon name="arrowdown" type="antdesign" size={20} color="red" />
          <Text style={{color: 'red'}}>{item.price}</Text>
        </View>
        <Text></Text>
      </View>
    </Card>
  </View>
);
const data1 = [
  {
    key: 1,
    day: 'Saturday',
  },
  {
    key: 2,
    day: 'Sunday',
  },
  {
    key: 3,
    day: 'Monday',
  },
  {
    key: 4,
    day: 'Tuesday',
  },
  {
    key: 5,
    day: 'Wednesday',
  },
  {
    key: 6,
    day: 'Thursday',
  },
  {
    key: 7,
    day: 'Friday',
  },
];

class ScreenFive extends Component {
  state = {
    selectedDay: '',
  };

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'center'}}>
        <View style={styles.upperContainer}>
          <View style={styles.header}>
            <Icon
              name="poll-h"
              type="font-awesome-5"
              size={40}
              color="white"
              color="white"
              onPress={() => alert('Simple Button pressed')}
            />
            <Icon
              name="wallet"
              type="entypo"
              size={40}
              color="white"
              onPress={() => alert('Simple Button pressed')}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Available Balance</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="dollar"
                type="font-awesome"
                size={20}
                color="white"
                containerStyle={styles.text1}
              />
              <Text style={{fontSize: 45, color: 'white'}}>7,346.89</Text>
            </View>
            <Text style={{fontSize: 15, color: 'white'}}>June 9,2020</Text>
          </View>
          <Card containerStyle={styles.cardStyle1}>
            <View style={styles.cardView1}>
              <Text style={styles.text2}>1234</Text>
              <Text style={styles.text2}>5675</Text>
              <Text style={styles.text2}>7897</Text>
              <Text style={styles.text2}>0987</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.cardView2}>
                <Text style={styles.text3}>Expires </Text>
                <Icon
                  name="caretright"
                  type="antdesign"
                  size={10}
                  color="white"
                />
                <Text style={styles.text3}> 02/22</Text>
              </View>
              <View style={styles.cardView3}>
                <Text style={styles.text3}>CVC Code </Text>
                <Icon
                  name="caretright"
                  type="antdesign"
                  size={10}
                  color="white"
                />
                <Text style={styles.text3}> 786</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.cardStyle}>
            <View style={styles.card2V}>
              <View style={styles.card2V1}>
                <Text style={styles.cardText1}>Income</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Icon
                    name="arrowup"
                    type="antdesign"
                    size={25}
                    color="green"
                  />
                  <Text style={{color: 'green',fontSize:22}}>$ 34,324.00</Text>
                </View>
              </View>
              <View style={styles.card2V1}>
                <Text style={styles.cardText1}>Expense</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Icon
                    name="arrowdown"
                    type="antdesign"
                    size={25}
                    color="red"
                  />
                  <Text style={{color: 'red',fontSize:22}}>$ 67,364.00</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
        <View style={{flex: 0.02}}></View>
        <View style={styles.lowerContainer}>
          <View
            style={{
              flexDirection: 'row',
              // marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 29}}>Detail of Movement</Text>
            <Picker
              selectedValue={this.state.selectedDay}
              style={{height: 150, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({selectedDay: itemValue})
              }>
              {data1.map((item, index) => {
                return (
                  <Picker.Item label={item.day} value={item.key} key={index} />
                );
              })}
            </Picker>
          </View>
          <FlatList
            data={data}
            renderItem={Item}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default ScreenFive;
