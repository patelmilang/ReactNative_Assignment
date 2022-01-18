// order.js;
import React, {Component} from 'react';
import {Text, View, Button,Image, Alert, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [
        {
          oder_id: '1',
          oder_name: 'Oder 1',
          oder_image: './assets/i1.jpg',
          oder_address: 'Address 1',
        },
        {
          oder_id: '2',
          oder_name: 'Oder 2',
          oder_image: './assets/i2.jpg',
          oder_address: 'Address 2',
        },
        {
          oder_id: '3',
          oder_name: 'Oder 3',
          oder_image: './assets/i3.jpg',
          oder_address: 'Address 3',
        },
      ],
    };

    this.props.navigation.addListener('willFocus', () => {});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.orderList}
          renderItem={({item}) => <OrderItemCell data={item} />}
        />
      </View>
    );
  }
}
  
export class OrderItemCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Your ' + this.props.data.oder_name + ' is Selected',
            'Address : ' + this.props.data.oder_address,
          );
        }}>
        <View
          style={{
            flex: 1,
            margin: 10,
            flexDirection: 'row',
            borderRadius: 10,
            backgroundColor: '#ffffff',
            elevation: 1,
            padding: 10,
          }}>
          <View style={{flex: 1}}>
            <Text>Order : {this.props.data.oder_name}</Text>
            <Text>Address : {this.props.data.oder_address}</Text>
          </View>
          {/* <Image
            source={require(this.props.data.oder_image)}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          /> */}
          <Image
            source={require('./assets/right-arrow.png')}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
