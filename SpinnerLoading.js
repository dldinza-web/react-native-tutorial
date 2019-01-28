import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

class SpinnerLoading extends Component {

  state = {
    animating: true
  }

  closeActivityIndicator = () => {
    this.setState({ animating: false })
  }

  componentDidMount = () => {
    setTimeout(() => { this.closeActivityIndicator() }, 6000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating = {this.state.animating}
          color="#bcaacc"
          size="small"

          style={styles.spinner}
        />

        <ActivityIndicator
          animating = {this.state.animating}
          color="#bcaacc"
          size="large"

          style={styles.spinner}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})

export default SpinnerLoading
