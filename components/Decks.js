import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {gray} from '../utils/colors'
import AddDeck from './AddDeck'


export default class Decks extends React.Component {
	static navigationOptions = {
		title: 'Decks'
	}

	getDeckList = () => {
		// TODO replace with async storage call
		return testDecks
	}

	showDeck = (deckId) => {
		// TODO navigate to deck component
	}

	addDeck = () => {
		this.props.navigation.navigate('addDeck')
	}

	render() {
		const decks = this.getDeckList()
		return (
			<View>
				<FlatList 
					data={Object.keys(decks).map(deckId => decks[deckId])}
					renderItem={
						({item}) => 
							<TouchableOpacity onPress={() => this.showDeck(item)}>
								<Text style={styles.deck}>{`${item.title} - ${item.questions.length} card(s)`}</Text>
							</TouchableOpacity>
					}
					keyExtractor={(item, index) => item.title}
				/>
				<TouchableOpacity onPress={this.addDeck} style={{marginTop:50, alignItems:'center'}} >
					<AntDesign name='plussquareo' size={60}/>
					<Text style={{fontSize:20}}>Add Deck</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	deck:{
		fontSize:20,
		flex:1,
		backgroundColor:gray,
		margin:10
	}
})

const testDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}