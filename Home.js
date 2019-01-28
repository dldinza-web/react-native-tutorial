import React, { Component } from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import PresentationalComponent from './PresentationalComponent';
import NavBar from './NavBar'

class Home extends Component {
  state = {
    myState: "This is my mutable state value",
    anotherState: "Second state"
  }

  updateState = () => {
    this.setState({ myState: 'This is my new State!!' });
  }

  updateAnotherState = () => {
    this.setState({ anotherState: 'Another state modified!!' });
  }

  render() {
    return (
      <ScrollView>

        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native Tutorial</Text>
          <PresentationalComponent myState={this.state.myState} updateState={this.updateState} />
          <Text style={styles.finalState} onPress={this.updateAnotherState}>
            {this.state.anotherState}
          </Text>

          <NavBar />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    width: 300,
    fontSize: 20,
    margin: 10
  },
  finalState: {
    margin: 10
  }
});

export default Home
