import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {white, purple} from '../utils/colors'
import {Feather} from '@expo/vector-icons'
import {clearLocalNotification} from '../utils/notifications'


export default class quiz extends React.Component {
	static navigationOptions = ({navigation}) => {
		const {title, questions} = navigation.state.params.deck
		return {
			title: `Quiz: ${title}`
		}
	}

	state = {
		cardIndex:0,
		score:0,
		answerVisible:false
	}

	markCorrect = (increment) => {
		let cardIndex = this.state.cardIndex + 1
		let score = this.state.score + increment
		const deck = this.props.navigation.state.params.deck
		if (cardIndex === deck.questions.length) {
			// navigate to results screen
			this.props.navigation.navigate('quizResults', {deck, score})
			// reset counters
			cardIndex = 0
			score = 0
			// clear local notification
			clearLocalNotification()
		}
		this.setState(state => ({
			cardIndex,
			score,
			answerVisible:false
		}))
	}

	markIncorrect = () => {
		this.markCorrect(0)
	}

	showAnswer = () => {
		this.setState(state => ({
			...state,
			answerVisible:true
		}))
	}

	render() {
		const {cardIndex, score, answerVisible} = this.state
		const {title, questions} = this.props.navigation.state.params.deck

		return (
			<View style={styles.container}>
				<Text style={styles.cardInfo}>Card {`${cardIndex + 1}/${questions.length}`}</Text>
				<Text style={styles.cardInfo}>Running Score: {`${score}/${questions.length}`}</Text>
				<Text style={styles.cardInfo}>Question: {questions[cardIndex].question}</Text>

				<TouchableOpacity onPress={this.showAnswer} style={styles.showAnswer}>
					<Feather name='eye' size={100} style={styles.icon}/>
					<Text style={styles.iconText}>Show Answer</Text>
				</TouchableOpacity>

				{answerVisible && 
					<Text style={styles.cardInfo}>
						Answer: {questions[cardIndex].answer}
					</Text>
				}

				<View style={styles.markButtons}>
					<TouchableOpacity onPress={() => this.markCorrect(1)} style={[styles.buttonContainer, {marginRight:20}]}>
						<Feather name='check' size={100} style={styles.icon}/>
						<Text style={styles.iconText}>Correct</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={this.markIncorrect} style={[styles.buttonContainer, {marginLeft:20}]}>
						<Feather name='x' size={100} style={styles.icon}/>
						<Text style={styles.iconText}>Incorrect</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	icon: {fontSize:20, padding:10, alignSelf:'center',color:white},
	container:{flex:1, marginTop:30, justifyContent:'space-evenly', alignItems:'center'},
	iconText: {fontSize:20, color:white},
	buttonContainer: {
		padding:20,
		backgroundColor: purple,
	},
	markButtons: {
		flexDirection:'row',
		justifyContent:'space-evenly',
		alignItems:'stretch'

	},
	cardInfo: {fontSize:20},
	showAnswer: {
		padding:20,
		backgroundColor: purple,
		flexDirection:'row'
	},
})