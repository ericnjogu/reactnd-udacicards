import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import QuizResults from './components/QuizResults'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {setLocalNotification} from './utils/notifications'

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
  },
  quiz: {
    screen:Quiz
  },
  quizResults: {
    screen:QuizResults
  }
}))

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <View style={styles.container}>
        <StackNav/>
        {/*<QuizResults/>*/}
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
