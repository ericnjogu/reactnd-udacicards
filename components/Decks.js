import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {gray} from '../utils/colors'
import AddDeck from './AddDeck'
import {getDecks} from '../utils/api'
import {NavigationEvents} from 'react-navigation'


export default class Decks extends React.Component {
	static navigationOptions = {
		title: 'Decks'
	}

	state = {
		decks:null
	}

	// CREDIT: https://forums.expo.io/t/how-to-parse-data-from-asyncstorage-to-text/3417/8
	async componentDidMount() {
		const decks = await getDecks()
		this.setState({
			'decks':JSON.parse(decks)
		})
	}

	showDeck = (deck) => {
		this.props.navigation.navigate('deck', {'deck': deck})
	}

	addDeck = () => {
		this.props.navigation.navigate('addDeck')
	}

	refreshDecks = () => {
		this.componentDidMount()
			.then(results => console.log(results))
			.catch((error) => {console.log(error)})
	}

	render() {
		const {decks} = this.state
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
				<NavigationEvents onWillFocus={this.refreshDecks}/>
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
