import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import reducers from '../reducers';

import { Provider } from 'react-redux'

import { createStore } from 'redux'

import Header from './Common/Header'

import LibraryList from './LibraryList'

class Root extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style ={{flex : 1}}>

          <Header HeaderText='Tech Stack' />
          <LibraryList  />


        </View>
      </Provider>
    );
  }

}


export default Root
