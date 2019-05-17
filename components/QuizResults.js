import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {white, purple} from '../utils/colors'
import {Feather, MaterialIcons} from '@expo/vector-icons'


export default class Deck extends React.Component {
	static navigationOptions = ({navigation}) => {
		const {title, questions} = navigation.state.params.deck
		return {
			title: `Quiz Results: ${title}`
		}
	}

	showQuiz = () => {
		this.props.navigation.navigate('quiz', {'deck': this.props.navigation.state.params.deck})
	}

	showDeck = () => {
		this.props.navigation.navigate('deck', {'deck': this.props.navigation.state.params.deck})
	}

	render() {
		const {questions} = this.props.navigation.state.params.deck
		const {score} = this.props.navigation.state.params
		return (
			<View style={styles.container}>
				<Text style={styles.cardInfo}>Final Score: {`${score}/${questions.length}`}</Text>

				<View style={styles.markButtons}>
					<TouchableOpacity onPress={this.showDeck} style={styles.buttonContainer}>
						<MaterialIcons name='arrow-back' size={100} style={styles.icon}/>
						<Text style={styles.iconText}>Back to Deck</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={this.showQuiz} style={styles.buttonContainer}>
						<Feather name='rewind' size={100} style={styles.icon}/>
						<Text style={styles.iconText}>Restart Quiz</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	icon: {fontSize:20, padding:20, alignSelf:'center',color:white},
	container:{flex:1, marginTop:30, justifyContent:'space-evenly'},
	iconText: {fontSize:20, color:white},
	buttonContainer: {
		padding:20,
		backgroundColor: purple,
		height:120
	},
	cardInfo: {fontSize:20, alignSelf:'center'},
	markButtons: {
		flexDirection:'row',
		justifyContent:'space-evenly',
		alignItems:'stretch'

	},
})

const testDeck = {
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
  }