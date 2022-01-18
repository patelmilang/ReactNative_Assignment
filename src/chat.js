// chat.js;

import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatList: [
        {
          chat_user_id: '1',
          chat_massage: 'Hi',
          chat_time: '2:34 pm',
        },
        {
          chat_user_id: '2',
          chat_massage: 'Hi',
          chat_time: '2:35 pm',
        },
        {
          chat_user_id: '2',
          chat_massage: 'Hello..',
          chat_time: '2:36 pm',
        },
        {
          chat_user_id: '2',
          chat_massage: 'How are you?',
          chat_time: '2:36 pm',
        },
      ],
      chatMassage:''
    };

    this.props.navigation.addListener('willFocus', () => {});
  }

  sendMassage(){
    
    if(this.state.chatMassage){
       let obj = {
         chat_user_id: '2',
         chat_massage: this.state.chatMassage,
         chat_time: '2:38 pm',
       };

       let chatList = this.state.chatList;
       chatList.push(obj);


console.log('chatList :: ', chatList);
this.setState({
  chatMassage: chatList,
  chatMassage: '',
});

    }else{

    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.chatList}
          renderItem={({item}) => <ChatItemCell data={item} />}
        />
        <View
        // style={{backgroundColor: 'red'}}
        >
          <View
            style={{
              flexDirection: 'row',

              margin: 10,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#ffffff',
              elevation: 1,
            }}>
            <TextInput
              style={{
                width: '100%',
                fontSize: 16,
                margin: 6,
                marginStart: 0,
                flex: 1,
              }}
              value={this.state.chatMassage}
              onChangeText={changeText =>
                this.setState({chatMassage: changeText})
              }
              placeholder="Enter Message"
              // underlineColorAndroid="transparent"
              paddingLeft={12}
            />

            <TouchableOpacity
              style={{
                // backgroundColor: 'gray',
                borderRadius: 4,
                backgroundColor: this.state.chatMassage ? '#095CE5' : '#4e8bed',
                elevation: 1,
                alignSelf: 'center',
                padding: 8,
              }}
              disabled={this.state.chatMassage ? false : true}
              onPress={() => {
                this.sendMassage();
              }}>
              <Text style={{color: '#fff'}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export class ChatItemCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('props ::: ', this.props);
    return this.props.data.chat_user_id == '1' ? (
      <View
        style={{
          flex: 1,
          margin: 4,
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '#ffffff',
          elevation: 1,
          padding: 10,
        }}>
        <Image
          source={require('./assets/c1.png')}
          style={{height: 40, width: 40, alignSelf: 'center'}}
        />
        <View style={{justifyContent: 'center', flex: 1, marginStart: 10}}>
          <Text>{this.props.data.chat_massage}</Text>
          {/* <Text style={{fontSize: 10, marginTop: 4, textAlign: 'right'}}>
            {this.props.data.chat_time}
          </Text> */}
        </View>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          margin: 4,
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '#ffffff',
          elevation: 1,
          padding: 10,
        }}>
        <View style={{justifyContent: 'center', flex: 1, marginEnd: 10}}>
          <Text style={{ textAlign: 'right'}}>{this.props.data.chat_massage}</Text>
          {/* <Text style={{fontSize: 10, marginTop: 4}}>
            {this.props.data.chat_time}
          </Text> */}
        </View>
        <Image
          source={require('./assets/c2.png')}
          style={{height: 40, width: 40, alignSelf: 'center'}}
        />
      </View>
    );
  }
}