/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    myState: "This is my mutable state value",
    anotherState: "Second state"
  }

  constructor() {
    super();
    this.updateAnotherState = this.updateAnotherState.bind(this);
  }

  updateState = () => {
    this.setState({ myState: 'This is my new State!!' });
  }

  updateAnotherState() {
    this.setState({ anotherState: 'Another state modified!!' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Tutorial</Text>
        <Text onPress={this.updateState}>
          {this.state.myState}
        </Text>
        <Text onPress={this.updateAnotherState}>
          {this.state.anotherState}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10
  }
});
