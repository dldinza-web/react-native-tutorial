import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native'

class AsyncLocalStore extends Component {
  state = {
    name: ''
  }

  componentDidMount = () => {
    AsyncStorage.getItem('name').then((value) => {
      this.setState({ name: value })
    })
  }

  updateText = (text) => {
    AsyncStorage.setItem('name', text)
    this.setState({ name: text })
  }

  render() {
    return (
      <View>
        <Text style={[styles.hi, styles.big]}>Hi Jaime</Text>
        <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={this.updateText}/>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  hi: {
    color: "#fc12cc",
    fontWeight: '900'
  },
  big: {
    fontSize: 30
  }
})

export default AsyncLocalStore
