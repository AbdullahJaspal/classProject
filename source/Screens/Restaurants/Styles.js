import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  firstPart: {
    // flex: 0.7,
    backgroundColor: '#FAF9F8',
    borderRadius: 20,
  },
  searchBar: {
    // flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '#EDEEED',
    borderRadius: 40,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  searchText: {
    fontSize: 20,
    marginLeft: 20,
    color: '#AFAFAF',
  },
  searchIcon: {
    backgroundColor: '#E6E6E6',
    width: '20%',
    justifyContent: 'center',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  istTextView: {
    // flex: 0.25,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  istText: {
    alignSelf: 'center',
    fontSize: 45,
    color: '#555555',
  },
  touchButton: {
    //   width:'80%',
    borderRadius: 70,
    paddingLeft: 10,
    paddingBottom: 20,
    paddingRight: 10,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#FCEFEF',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  flatlistH: {
    // backgroundColor:'green',
    color: '#FCEFEF',
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  scrollView: {
    // flex: 0.48,
    width: '90%',
    alignSelf: 'center',
  },
  scondV1: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // backgroundColor: 'blue',
  },
  scondVText1: {
    fontSize: 35,
  },
  scondVText2: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  scondV2: {
    // flex: 0.52,
    // backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
  backgroundImage: {
    width: '100%',
    height: 95,
    borderRadius: 40,
    alignSelf: 'center',
    backgroundColor: 'blue',
  },
  cardView: {
    // backgroundColor: 'blue',
    margin: 10,
  },
  cardView1: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardText1: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 10,
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderRadius: 50,
    paddingLeft: 5,
    paddingRight: 5,
  },
  flatListH1: {
    margin: 10,
  },
  modalView: {
    alignSelf: 'center',
    // flex: 0.45,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: 'white',
  },
  modalmessage: {
    // flex: 0.25,
    fontSize: 25,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    backgroundColor: 'green',
    fontSize: 40,
    borderRadius: 10,
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
    width: '70%',
    alignSelf: 'center',
    // flex: 0.2,
    borderRadius: 10,
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});

export default Styles;
