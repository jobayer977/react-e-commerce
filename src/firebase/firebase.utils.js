import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDTAxnWYJ0a8iyDFbccLwf6W8hySYVPENI",
	authDomain: "complete-react-ecommerse-app.firebaseapp.com",
	databaseURL: "https://complete-react-ecommerse-app.firebaseio.com",
	projectId: "complete-react-ecommerse-app",
	storageBucket: "complete-react-ecommerse-app.appspot.com",
	messagingSenderId: "545719635956",
	appId: "1:545719635956:web:8bdd5615825443a57573a1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (e) {
			console.log("error crating", e.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
