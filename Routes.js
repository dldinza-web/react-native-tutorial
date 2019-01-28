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
import ModalBox from './ModalBox';
import SpinnerLoading from './SpinnerLoading';
import DropdownSelector from './DropdownSelector';
import AsyncLocalStore from './AsyncLocalStore';

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
  },
  {
    key: 'ModalBox',
    title: 'Modal Window',
    type: ModalBox
  },
  {
    key: 'SpinnerLoading',
    title: 'Activiy Indicator',
    type: SpinnerLoading
  },
  {
    key: 'DropdownSelector',
    title: 'Select an user',
    type: DropdownSelector
  },
  {
    key: 'AsyncLocalStore',
    title: 'Local Storage',
    type: AsyncLocalStore
  },
]

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" title="Home" component={Home} initial={true}></Scene>
      {
        listItems.map((item, index) => (
          <Scene key={item.key} title={item.title} component={item.type} />
        ))
      }
    </Scene>
  </Router>
)

export default Routes
