import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
	apiKey: "AIzaSyDTAxnWYJ0a8iyDFbccLwf6W8hySYVPENI",
	authDomain: "complete-react-ecommerse-app.firebaseapp.com",
	databaseURL: "https://complete-react-ecommerse-app.firebaseio.com",
	projectId: "complete-react-ecommerse-app",
	storageBucket: "complete-react-ecommerse-app.appspot.com",
	messagingSenderId: "545719635956",
	appId: "1:545719635956:web:8bdd5615825443a57573a1",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()
	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createAt = new Date()
		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			})
		} catch (e) {
			console.log("error crating", e.message)
		}
	}
	return userRef
}
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey)
	const batch = firestore.batch()
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})
	return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data()
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		}
	})
	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection
		return acc
	}, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe()
			resolve(userAuth)
		}, reject)
	})
}
export const firestore = firebase.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
googleProvider.setCustomParameters({ prompt: "select_account" })

export default firebase
