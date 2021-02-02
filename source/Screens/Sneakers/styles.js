import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  seacondView: {
    width: '95%',
    alignSelf: 'center',
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  searchBar: {
    flex: 0.9,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderRightWidth: 0,
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
  },
  searchText: {
    flex: 0.9,
    fontSize: 20,
    paddingLeft: 20,
    color: '#AFAFAF',
  },
  searchIcon: {
    backgroundColor: 'red',
    height: 70,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    width: 70,
    justifyContent: 'center',
  },
  cardView: {
    flex: 0.5,
    backgroundColor: '#E8E8E8',
    padding: 10,
  },
  cardViewT: {
    flex: 0.5,
    padding: 10,
  },
  cardView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  cardView2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.6,
  },
  cardView3: {
    flexDirection: 'row',
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: '100%',
    height: 140,
  },
  cardStyle: {
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  picText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 16,
  },
  reminder: {
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    flex: 1,
    fontSize: 20,
    color: 'white',
  },
  child: {
    height:270,
    borderRadius: 10,
    backgroundColor:'#E8E8E8',
    padding: 10,
    margin: 10,
  },
  slideImage: {

    width: '100%',
    height: 250,
    alignSelf: 'center',
    borderRadius:10,
  },
  modalStyle: {
    // width: '95%',

    alignSelf: 'center',
    justifyContent: 'center',
    height:340,
    borderRadius: 10,
    backgroundColor:'white'
  },
});
export default styles;
