import React, {Component} from 'react';
import { Image, View, Text } from 'react-native';

const ImageExample = () => {
  return (
    <View>
      <Text>Image from file</Text>
      <Image source={ require('./images/react-native-mini-logo.jpg') }/>

      <Text>Image from Http</Text>
      <Image
        source={{uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}

export default ImageExample
