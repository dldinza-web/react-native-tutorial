import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { listItems } from './Routes'

class NavBar extends Component {
  goTo = (navKey) => {
    switch(navKey) {
      case 'ItemForm':
        Actions.ItemForm()
      break;
      case 'ScrollViewLongList':
        Actions.ScrollViewLongList()
      break;
      case 'List':
        Actions.List()
      break;
      case 'ImageExample':
        Actions.ImageExample()
      break;
      case 'HttpRemoteItems':
        Actions.HttpRemoteItems()
      break;
      case 'Animations':
        Actions.Animations()
      break;
    }
  }

  render() {
    return (
      <View style={styles.buttonsWrapper}>
        {
          listItems.map((item, index) => (
            <TouchableOpacity key={item.key + '-' + index} onPress={() => { this.goTo(item.key) }}>
              <Text style={styles.btn}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    width: 400
  },
  btn: {
    padding: 10,
    color: '#ffffff',
    marginTop: 15,
    height: 40,
    textAlign: 'center',
    backgroundColor: 'orange'
  }
})

export default NavBar
