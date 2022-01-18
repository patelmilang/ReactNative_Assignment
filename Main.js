import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };

    this.props.navigation.addListener('willFocus', () => {
      // let id = .getItem('id');
    });

  }


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Main</Text>

        <Button
          title="Logout"
          onPress={() => {
            let keys = [
              "id",
              "password"
            ];
            AsyncStorage.multiRemove(keys, err => {
              // const popAction = StackActions.pop({n: 1});
              this.props.navigation.navigate('Login');
            });
            
          }}
        />
      </View>
    );
  }
}
