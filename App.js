import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const StackNav = createAppContainer(createStackNavigator ({
  decks: {
    screen:Decks,
  },
  addDeck: {
    screen:AddDeck
  }
}))

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNav/>
        {/*<AddDeck/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
