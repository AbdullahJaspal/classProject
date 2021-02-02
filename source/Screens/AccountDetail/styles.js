import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    flex: 0.4,
    backgroundColor: '#223C53',
    paddingRight: 30,
    paddingLeft: 30,
  },
  lowerContainer: {
    flex: 0.55,
    paddingRight: 30,
    paddingLeft: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'yellow',
    fontSize: 15,
  },
  text1: {
    backgroundColor: '#223C53',
    borderRadius: 100,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 7,
    paddingRight: 7,
    color: 'white',
    backgroundColor: 'black',
  },
  text2: {
    fontSize: 25,
    color: 'white',
  },
  text3: {
    fontSize: 15,
    color: 'white',
  },
  cardStyle: {
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 10,
    marginTop:0
  },
  cardStyle1: {
    backgroundColor: '#2E4B62',
    borderColor: '#1E3449',
    borderRadius: 10,
    marginBottom:15,
  },
  cardView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  cardView2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    margin: 5,
  },
  cardView3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'flex-end',
  },
  cardText: {
    fontSize: 35,
  },
  cardV: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card2V: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card2V1: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },

  cardText1: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    borderWidth: 0.8,
    borderRadius: 50,
    textAlign: 'center',
  },
});

export default styles;
