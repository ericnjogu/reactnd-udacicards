import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {blue} from '../utils/colors'
import {saveDeckTitle} from '../utils/api'


export default class AddDeck extends React.Component {
	static navigationOptions = {
		title: 'Add Deck'
	}
	state = {
		title:''
	}

	addDeck = () => {
		const {title} = this.state
		if (title.length > 0) {
			saveDeckTitle(title)
			this.props.navigation.navigate('deck', {'deck': {'title':title, questions:[]}})
			this.setState({
				title:''
			})
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput 
					onChangeText={(title) => this.setState({title})} 
					value = {this.state.title}
					style={styles.text}
					placeholder='Give your deck a name'
					autoFocus={true}
				/>
				<TouchableOpacity onPress={this.addDeck}>
					<Text style={styles.button}>Add Deck</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {fontSize:20, padding:20, backgroundColor:blue, alignSelf: 'center',},
	container:{flex:1},
	text: {marginTop:50, borderColor:blue, borderWidth:2, marginBottom:50, fontSize:20, }
})