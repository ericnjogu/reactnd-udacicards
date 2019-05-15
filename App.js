import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const StackNav = createAppContainer(createStackNavigator ({
  decks: {
    screen:Decks,
  },
  addDeck: {
    screen:AddDeck
  },
  deck: {
    screen:Deck
  },
  addCard: {
    screen:AddCard
  }
}))

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
