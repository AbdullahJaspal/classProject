import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

class DocPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async doc() {
    try   {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      alert(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: 'blue', padding: 10}}
          onPress={() => this.doc()}>
          <Text style={{fontSize: 20, color: 'white'}}>button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DocPicker;
