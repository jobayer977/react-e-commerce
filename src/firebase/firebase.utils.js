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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
