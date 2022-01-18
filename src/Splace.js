import React, {Component} from 'react';
import {Text, View, Button, Alert, Keyboard,Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };

    // props.navigation.addListener('willFocus', () => {
    //   alert('focus')
    // });
  }

  async componentDidMount() {
    try {
      var useIdd = await AsyncStorage.getItem('id');
      var passwordd = await AsyncStorage.getItem('password');
       setTimeout(() => {
         if(useIdd && passwordd){
this.props.navigation.navigate('Main');
         }else{
this.props.navigation.navigate('Login');
         }
       }, 2000);
    } catch (e) {
      // saving error
    }
    console.log(' useId : ', useIdd, ' password : ', passwordd);

  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* <Text
          style={{
            flex: 1,
            fontSize: 40,
            textAlign: 'center',
            marginTop:400
            // textAlignVertical: 'center',
          }}>
          Splace Screen
        </Text> */}
        {/* <Image
          source={require('./assets/account-icon.png')}
          style={{height: 30, width: 30}}
        /> */}
        <Image
          source={require('./assets/splace.jpg')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
    );
  }
}