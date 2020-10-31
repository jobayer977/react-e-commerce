import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"
import { ShopActionTypes } from "./shop.types"

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
})

export const fetchCollectionFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections")
		dispatch(fetchCollectionsStart())
		collectionRef
			.get()
			.then((snapShot) => {
				const collectionMap = convertCollectionsSnapshotToMap(snapShot)
				dispatch(fetchCollectionsSuccess(collectionMap))
				this.setState({ loading: false })
			})
			.catch((error) => dispatch(fetchCollectionFailure(error.message)))
	}
}
