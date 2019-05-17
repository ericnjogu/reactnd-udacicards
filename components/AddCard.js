import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {blue} from '../utils/colors'
import {updateDeck} from '../utils/api'


export default class AddCard extends React.Component {
	static navigationOptions = {
		title: 'Add Card',
	}
	state = {
		question: '',
		answer:''
	}

	addCard = () => {
		const {deck} = this.props.navigation.state.params
		updatedDeck = {...deck, questions:deck.questions.concat(this.state)}
		updateDeck(updatedDeck)
		this.props.navigation.navigate('deck', {'deck': updatedDeck})
	}

	updateAnswer = (answer) => {
		this.setState(state => {
			return {
				...state,
				answer,
			}

		})
	}

	updateQuestion = (question) => {
		this.setState(state => {
			return {
				...state,
				question,
			}

		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.labelText, {marginTop:20}]}>Question</Text>
				<TextInput 
					onChangeText={this.updateQuestion} 
					value = {this.state.question}
					style={styles.textInput}
					placeholder='your question here'
					multiline={true}
					autoFocus={true}
				/>

				<Text style={styles.labelText}>Answer</Text>
				<TextInput 
					onChangeText={this.updateAnswer} 
					value = {this.state.answer}
					style={styles.textInput}
					placeholder='your answer here'
					multiline={true}
				/>

				<TouchableOpacity onPress={this.addCard}>
					<Text style={styles.button}>Add Card</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {fontSize:20, padding:20, backgroundColor:blue, alignSelf: 'center',},
	container:{flex:1},
	labelText: {fontSize:20},
	textInput: {marginTop:10, borderColor:blue, borderWidth:2, marginBottom:10, fontSize:20, borderRadius:5} 
})