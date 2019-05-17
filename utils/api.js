import {AsyncStorage} from 'react-native'

const DECK_STORAGE_KEY = "DECK_STORAGE_KEY"
//JSON.parse(results)

export function saveDeckTitle(title) {
	try {
		AsyncStorage.mergeItem(DECK_STORAGE_KEY, 
			JSON.stringify(
				{
					[title]:{
						'title':title,
						questions:[]
					}
				}
			)
		)
	} catch(error) {
		console.log('AsyncStorage setItem error: ', error)
	}
}

export function getDecks() {
	try {
		return AsyncStorage.getItem(DECK_STORAGE_KEY)
	}catch(error) {
		console.log('getDecks error', error)
	}
}
