import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {gray} from '../utils/colors'
import AddDeck from './AddDeck'
import {getDecks} from '../utils/api'


export default class Decks extends React.Component {
	static navigationOptions = {
		title: 'Decks'
	}

	state = {
		decks:null
	}

	async componentDidMount() {
		this.setState({
			decks:getDecks()
		})
	}

	showDeck = (deck) => {
		this.props.navigation.navigate('deck', {'deck': deck})
	}

	addDeck = () => {
		this.props.navigation.navigate('addDeck')
	}

	render() {
		const decks = this.state.decks
		debugger
		return (
			<View>
				{
					decks === null || decks === undefined
					?
					<Text style={styles.noDecks}>No decks added yet</Text>
					:
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
					
				}
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
		margin:10,
		padding:15
	},
	noDecks: {fontSize:20, alignSelf:'center'},
})
