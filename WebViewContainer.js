import React, { Component } from 'react'
import { WebView, View, StyleSheet } from 'react-native'

class WebViewContainer extends Component {
  render() {
    let params = {
      uri: "https://www.tutorialspoint.com/react_native"
    }

    return (
      <View style={styles.container}>
        <WebView source={ params }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default WebViewContainer
