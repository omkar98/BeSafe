/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase';
import { notificationHandler } from './src/notificationHandler';
import { RootComponent } from './src/navigation';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';


export const App = class App extends React.Component{
  componentDidMount = () => {
    notificationHandler.init().then(() => {
      console.log('notificationHandler init successful');
    }).catch((error) => {
      console.error(`notificationHandler init failed ${error}`);
    });
  }

  componentWillUnmount = () => {
    notificationHandler.reset();
  }

  render = ()=>{
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <RootComponent/>
      </ApplicationProvider>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.darker,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
