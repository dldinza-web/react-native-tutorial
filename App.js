/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PresentationalComponent from './PresentationalComponent';

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
        <PresentationalComponent myState={this.state.myState} updateState={this.updateState} />
        <Text style={styles.finalState} onPress={this.updateAnotherState}>
          {this.state.anotherState}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    width: 100,
    fontSize: 20,
    margin: 10
  },
  finalState: {
    margin: 10
  }
});
