import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './Home'
import ItemForm from './ItemForm'
import List from './List';
import ScrollViewLongList from './ScrollViewLongList';
import ImageExample from './ImageExample';
import HttpRemoteItems from './HttpRemoteItems';
import Animations from './Animations';
import WebViewContainer from './WebViewContainer';

export const listItems = [
  {
    key: 'ItemForm',
    title: 'Sign in',
    type: ItemForm
  },
  {
    key: 'List',
    title: 'List',
    type: List
  },
  {
    key: 'ScrollViewLongList',
    title: 'Long List',
    type: ScrollViewLongList
  },
  {
    key: 'ImageExample',
    title: 'Image Example',
    type: ImageExample
  },
  {
    key: 'HttpRemoteItems',
    title: 'Remote Info',
    type: HttpRemoteItems
  },
  {
    key: 'Animations',
    title: 'Animations',
    type: Animations
  },
  {
    key: 'WebViewContainer',
    title: 'Web Site Container',
    type: WebViewContainer
  }
]

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" title="Home" component={Home} initial={true}></Scene>
      {
        listItems.map((item, index) => (
          <Scene key={item.key} title={item.title} component={item.type} ></Scene>
        ))
      }
    </Scene>
  </Router>
)

export default Routes
