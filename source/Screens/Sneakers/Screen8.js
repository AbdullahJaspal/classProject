import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

let data = [
  {
    id: 1,
    image: require('./../../Assets/boot1.png'),
    name: `JS`,
    date: `9 Dec,2020 `,
    description: `JS doesn't offer
discount,but you will 
often be able to find Gucci
product on season state`,
  },
  {
    id: 2,
    image: require('./../../Assets/boot2.png'),
    name: `Gucci`,
    date: `9 Dec,2020 `,
    description: `JS doesn't offer
discount,but you will 
often be able to find Gucci
product on season state`,
  },
  {
    id: 3,
    image: require('./../../Assets/boot3.png'),
    name: `Prada`,
    date: `9 Dec,2020 `,
    description: `JS doesn't offer
discount,but you will 
often be able to find Gucci
product on season state`,
  },
  {
    id: 4,
    image: require('./../../Assets/boot4.png'),
    name: `Bata`,
    date: `9 Dec,2020 `,
    description: `JS doesn't offer
discount,but you will 
often be able to find Gucci
product on season state`,
  },
  {
    id: 5,
    image: require('./../../Assets/boot5.png'),
    name: `Boots`,
    date: `9 Dec,2020 `,
    description: `JS doesn't  offer
    discount,but you will 
    often be able to find Gucci
    product on season state`,
  },
  {
    id: 6,
    image: require('./../../Assets/boot6.png'),
    name: `Levis`,
    date: `9 Dec,2020 `,
    description: `JS doesn't offer
discount,but you will 
often be able to find Gucci
product on season state`,
  },
];

class Screen8 extends Component {
  state = {
    search: '',
    showPick: false,
    query: null,
    dataSource: data,
    databackup: data,
    isFetching: false,
    modalView: false,
  };
  left = ({item}) => (
    <View>
      <Card>
        <View style={styles.cardStyle}>
          <View style={styles.cardView}>
            <Text style={styles.picText}>$ 34</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalView: true});
              }}>
              <Image
                style={styles.backgroundImage}
                resizeMode="contain"
                source={item.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardViewT}>
            <View style={styles.cardView1}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardView2}>
              <Text style={{fontSize: 15}}>{item.description}</Text>
            </View>
            <View style={styles.cardView3}>
              <View style={{width: '70%'}}>
                <Text style={styles.reminder}>Reminder</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
  right = ({item}) => (
    <View>
      <Card>
        <View style={styles.cardStyle}>
          <View style={styles.cardViewT}>
            <View style={styles.cardView1}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardView2}>
              <Text style={{fontSize: 15}}>{item.description}</Text>
            </View>
            <View style={styles.cardView3}>
              <View style={{width: '70%'}}>
                <Text style={styles.reminder}>Reminder</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardView}>
            <Text style={styles.picText}>$ 34</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalView: true});
              }}>
              <Image
                style={styles.backgroundImage}
                resizeMode="contain"
                source={item.image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
  renderItem = ({item}) => {
    if (item.id % 2 == 0) {
      return this.right({item});
    } else {
      return this.left({item});
    }
  };
  onRefresh() {
    this.setState({isFetching: true}, () => {
      data;
    });
    this.setState({isFetching: false});
  }
  componentDidMount() {
    this.setState({dataSource: data});
    this.setState({databackup: data});
  }
  filterItem(query) {
    this.setState({
      query: query,
    });
    if (query === '') {
      this.setState({
        dataSource: this.state.databackup,
      });
    } else {
      data = this.state.databackup;
      query = query.toUpperCase();
      data = data.filter((k) => k.name.toUpperCase().match(query));
      this.setState({
        dataSource: data,
      });
    }
  }
  handleConfirm = (date) => {
    alert('A date has been picked: ' + date);
    this.setState({showPick: false});
  };
  handleCancel = () => {
    this.setState({showPick: false});
  };

  render() {
    const {search} = this.state.search;
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sneaker Hunter</Text>
          <Icon name="refresh" type="font-awesome" size={35} />
        </View>
        <View style={styles.seacondView}>
          <View style={styles.searchView}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchText}
                placeholder="Search Here... "
                value={this.state.query}
                onChangeText={(query) => {
                  this.filterItem(query);
                }}
              />
              <Icon
                name="search"
                type="evilicon"
                size={40}
                color={'white'}
                style={styles.searchIcon}></Icon>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flex: 0.15,
              }}>
              <Icon
                name="sliders"
                type="feather"
                size={40}
                onPress={() => {
                  this.setState({showPick: true});
                }}
              />
            </View>
            <DateTimePicker
              isVisible={this.state.showPick}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.handleCancel}
            />
          </View>
          <View>
            <FlatList
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.isFetching}
              data={this.state.dataSource}
              extraData={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <Modal
            isVisible={this.state.modalView}
            coverScreen={true}
            hasBackdrop={true}>
            <View style={{alignItems: 'flex-end'}}>
              <Icon
                name="window-close"
                type="font-awesome-5"
                size={30}
                color="white"
                onPress={() => {
                  this.setState({modalView: false});
                }}></Icon>
            </View>
            <View style={styles.modalStyle}>
              <Swiper autoplay aautoplayTimeout={2} loop>
                <View style={styles.child}>
                  <Image
                    resizeMode="contain"
                    source={require('./../../Assets/boot1.png')}
                    style={styles.slideImage}></Image>
                </View>
                <View style={styles.child}>
                  <Image
                    resizeMode="contain"
                    source={require('./../../Assets/boot2.png')}
                    style={styles.slideImage}></Image>
                </View>
                <View style={styles.child}>
                  <Image
                    resizeMode="contain"
                    source={require('./../../Assets/boot3.png')}
                    style={styles.slideImage}></Image>
                </View>
                <View style={styles.child}>
                  <Image
                    resizeMode="contain"
                    source={require('./../../Assets/boot4.png')}
                    style={styles.slideImage}></Image>
                </View>
                <View style={styles.child}>
                  <Image
                    resizeMode="contain"
                    source={require('./../../Assets/boot5.png')}
                    style={styles.slideImage}></Image>
                </View>
              </Swiper>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export default Screen8;
