import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {white, purple} from '../utils/colors'
import {Entypo, SimpleLineIcons} from '@expo/vector-icons'


export default class Deck extends React.Component {
	static navigationOptions = ({navigation}) => {
		const {title, questions} = navigation.state.params.deck
		return {
			title: `${title} - ${questions.length} card(s)`
		}
	}

	showQuiz = () => {
		this.props.navigation.navigate('quiz', {'deck': this.props.navigation.state.params.deck})
	}

	showAddCard = () => {
		this.props.navigation.navigate('addCard', {'deck': this.props.navigation.state.params.deck})
	}

	render() {
		const {questions} = this.props.navigation.state.params.deck
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.showAddCard} style={styles.buttonContainer}>
					<Entypo name='add-to-list' size={100} style={styles.icon}/>
					<Text style={styles.iconText}>Add Card</Text>
				</TouchableOpacity>
				{
					questions.length > 0 
					&&
					<TouchableOpacity onPress={this.showQuiz} style={styles.buttonContainer}>
						<SimpleLineIcons name='question' size={100} style={styles.icon}/>
						<Text style={styles.iconText}>Start Quiz</Text>
					</TouchableOpacity>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	icon: {fontSize:20, padding:20, alignSelf:'center',color:white},
	container:{flex:1, flexDirection:'row', marginTop:30, justifyContent:'space-evenly'},
	iconText: {fontSize:20, color:white},
	buttonContainer: {
		padding:20,
		backgroundColor: purple,
		height:120
	}
})