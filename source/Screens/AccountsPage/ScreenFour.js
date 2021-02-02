import React, {Component} from 'react';
import {View, Image, Text, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {Icon, Card,} from 'react-native-elements';

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
        <View style={{flex: 0.67,alignItems:'center'}}>
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

class ScreenFour extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.containerCard}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              All my Accounts
              <Text style={styles.headerText1}>{'\n'}June 10,2018</Text>
            </Text>
            <Icon name="bar-chart-2" type="feather" size={40} color="black" />
          </View>
          <Image
            style={styles.Image}
            source={require('./../../Assets/download.jpg')}></Image>
          <View style={{flex:0.5}}>
            <Card containerStyle={styles.cardStyle}>
              <View style={styles.cardV}>
                <View style={{width: '50%', alignItems: 'center'}}>
                  <Text style={styles.cardText}>Income</Text>
                  <View style={{flexDirection: 'row', margin: 5}}>
                    <Icon
                      name="arrowup"
                      type="antdesign"
                      size={20}
                      color="green"
                    />
                    <Text style={{color: 'green'}}>$34f324</Text>
                  </View>
                </View>
                <View style={{width: '50%', alignItems: 'center'}}>
                  <Text style={styles.cardText}>Expense</Text>
                  <View style={{flexDirection: 'row', margin: 5}}>
                    <Icon
                      name="arrowdown"
                      type="antdesign"
                      size={20}
                      color="red"
                    />
                    <Text style={{color: 'red'}}>34578234</Text>
                  </View>
                </View>
              </View>
            </Card>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
                alignItems:'center'
              }}>
              <Text style={{fontSize: 35}}>Detail of Movement</Text>
              <Icon name="wallet" type="entypo" size={40} />
            </View>
            <FlatList
              data={data}
              renderItem={Item}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default ScreenFour;
