import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import {Card, Icon, SearchBar} from 'react-native-elements';
import Modal from 'react-native-modal';
import Styles from './Styles';

const {width, height} = Dimensions.get('window');

const f1Data = [
  {
    id: 1,
    name: 'bowl',
    type: 'entypo',
    country: 'Mexican',
    selected: false,
  },
  {
    id: 2,
    name: 'bowl',
    type: 'entypo',
    country: 'Italian',
    selected: false,
  },
  {
    id: 3,
    name: 'bowl',
    type: 'entypo',
    country: 'Chinese',
    selected: false,
  },
  {
    id: 4,
    name: 'bowl',
    type: 'entypo',
    country: 'Arabic',
    selected: false,
  },
  {
    id: 5,
    name: 'bowl',
    type: 'entypo',
    country: 'Asian',
    selected: false,
  },
];
let data1 = [
  {
    key: 1,
    image: require('./../../Assets/pizza.jpg'),
    dish: `Cheezer's`,
    location: `Mirtabula,\nNayosarak,Sylet`,
  },
  {
    key: 2,
    image: require('./../../Assets/arbian.jpg'),
    dish: `Kebabish`,
    location: `Austin,\nMaragokak,Sylet`,
  },
  {
    key: 3,
    image: require('./../../Assets/asian.jpg'),
    dish: `Spicy`,
    location: `Mirtabula,\nNayosarak,Sylet`,
  },
  {
    key: 4,
    image: require('./../../Assets//rolls.jpg'),
    dish: `Cheezer's`,
    location: `Mirtabula,\nNayosarak,Sylet`,
  },
];
const Item1 = ({item}) => (
  <Card
    containerStyle={{
      borderRadius: 20,
      marginBottom: 10,
    }}>
    <Image style={Styles.backgroundImage} source={item.image}></Image>
    <View style={Styles.cardView}>
      <Text style={Styles.cardText}>{item.dish}</Text>
      <View style={{flexDirection: 'row'}}>
        <Icon name="location-pin" type="entypo" alignSelf="flex-start" />
        <Text>{item.location}</Text>
      </View>
    </View>
    <View style={Styles.cardView1}>
      <Text style={Styles.cardText1}>Asian</Text>
      <Text style={Styles.cardText1}>Italian</Text>
      <Icon name="dots-two-horizontal" type="entypo" alignSelf="flex-start" />
    </View>
  </Card>
);
class ScreenSix extends Component {
  state = {
    data: f1Data,
    modalOpen: false,
    modalButtonSelect: false,
    search: '',
    sourceData: data1,
    backupData: data1,
  };

  itemSelection = ({id}) => {
    const {data} = this.state;
    this.setState({
      data: data.map((item) => {
        item.selected = false;
        if (item.id === id) {
          return {
            ...item,
            selected: true,
          };
        }
        return item;
      }),
    });
  };
  renderItem = ({item}) => (
    <View style={{alignSelf: 'center', paddingLeft: 10, paddingRight: 10}}>
      <TouchableOpacity
        style={[
          Styles.touchButton,
          {
            backgroundColor: item.selected ? '#FF5555' : '#FAF9F8',
          },
        ]}
        onPress={() => {
          this.itemSelection(item);
        }}>
        <View style={Styles.icon}>
          <Icon
            // reverse
            name={item.name}
            type={item.type}
            size={50}
            color="#FF4C4D"></Icon>
        </View>
        <View>
          <Text style={{fontSize: 20}}>{item.country}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  1; 
  filterItem(search1) {
    this.setState({search: search1,});
    if (search1 === '') {
      this.setState({
        sourceData: this.state.backupData,
      });
    } else {
      data1 = this.state.backupData;
      search1 = search1.toUpperCase();
      data1 = data1.filter((k) => k.dish.toUpperCase().match(search1));
      this.setState({
        sourceData: data1,
      });
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={Styles.firstPart}>
          <View style={Styles.searchBar}>
            <TextInput
              style={Styles.searchText}
              placeholder="Restaurants or Dishes.. "
              onChangeText={(search1) => {
                this.filterItem(search1);
              }}></TextInput>
            <View style={Styles.searchIcon}>
              <Icon name="search" type="evilicon" size={35}></Icon>
            </View>
          </View>
          <View style={Styles.istTextView}>
            <Text style={Styles.istText}>Restaurants</Text>
            <Icon
              name="sliders-h"
              type="font-awesome-5"
              size={35}
              onPress={() => {
                this.setState({modalOpen: true});
              }}></Icon>
            <Modal
              isVisible={this.state.modalOpen}
              coverScreen={true}
              hasBackdrop={true}>
              <View style={Styles.modalView}>
                <Text style={Styles.modalmessage}>
                  Are you Sure You want to mark {'\n'}
                  This Inspection as Completed?
                </Text>
                <Text
                  style={[Styles.modalText, {backgroundColor: '#38F094'}]}
                  onPress={() => {
                    this.setState({modalOpen: false});
                  }}>
                  Yes
                </Text>
                <Text
                  style={Styles.modalText}
                  onPress={() => {
                    this.setState({modalOpen: false});
                  }}>
                  Cancel
                </Text>
              </View>
            </Modal>
          </View>
          <View style={{flex: 0.5}}>
            <FlatList
              horizontal={true}
              style={Styles.flatlistH}
              data={this.state.data}
              extraData={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
        <View style={{flex: 0.02}}></View>
        <ScrollView style={Styles.scrollView}>
          <View style={Styles.scondV1}>
            <Text style={Styles.scondVText1}>Popular Restaurants</Text>
            <Text
              style={Styles.scondVText2}
              onPress={() => alert('Simple Button pressed')}>
              See all
            </Text>
          </View>
          <View style={Styles.scondV2}>
            <FlatList
              horizontal={true}
              style={Styles.flatlistH1}
              data={this.state.sourceData}
              renderItem={Item1}
              keyExtractor={(item) => item.key.toString()}
            />
          </View>
          <View style={Styles.scondV1}>
            <Text style={Styles.scondVText1}>Other Restaurants</Text>
          </View>
          <View style={Styles.scondV2}>
            <FlatList
              horizontal={true}
              style={Styles.flatlistH1}
              data={this.state.sourceData}
              renderItem={Item1}
              keyExtractor={(item) => item.key.toString()}
            />
          </View>

          {/* </View> */}
        </ScrollView>
      </View>
    );
  }
}
export default ScreenSix;
