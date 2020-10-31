import { all, call, put, takeLatest } from "redux-saga/effects"
import { ShopActionTypes } from "./shop.types"
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"
import { fetchCollectionFailure, fetchCollectionsSuccess } from "./shop.actions"

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection("collections")
		const snapShot = yield collectionRef.get()
		const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot)
		yield put(fetchCollectionsSuccess(collectionMap))
	} catch (e) {
		yield put(fetchCollectionFailure(e.message))
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	)
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)])
}
