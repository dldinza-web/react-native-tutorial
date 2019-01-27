/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import Routes from './Routes';

type Props = {};
class App extends Component<Props> {
  constructor(Props) {
    super(Props);
  }

  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('App', () => App)

export default App

