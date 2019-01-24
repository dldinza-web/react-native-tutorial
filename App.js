/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import PresentationalComponent from './PresentationalComponent';
import List from './List';
import ItemForm from './ItemForm';
import ScrollViewLongList from './ScrollViewLongList';
import ImageExample from './ImageExample';

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
      <ScrollView>
        <View>
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native Tutorial</Text>
            <PresentationalComponent myState={this.state.myState} updateState={this.updateState} />
            <Text style={styles.finalState} onPress={this.updateAnotherState}>
              {this.state.anotherState}
            </Text>
          </View>

          <View>
            <List/>

            <ItemForm />

            <ScrollViewLongList/>
          </View>
        </View>

        <ImageExample/>
      </ScrollView>
    );
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
