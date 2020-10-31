import {
	auth,
	createUserProfileDocument,
	getCurrentUser,
	googleProvider,
} from "../../firebase/firebase.utils"
import { takeLatest, all, call, put } from "redux-saga/effects"
import { UserActionTypes } from "./user.types"
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpFailure,
	signUpSuccess,
} from "./user.actions"
import { clearCart } from "../cart/cart.action"

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		)
		const userSnapshot = yield userRef.get()
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
	} catch (e) {
		yield put(signInFailure(e))
	}
}

// Sign in with Email
export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield getSnapShotFromUserAuth(user)
	} catch (e) {
		yield put(signInFailure(e))
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// Sing in with Email and Password
export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield getSnapShotFromUserAuth(user)
	} catch (e) {
		yield put(signInFailure(e))
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SING_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser()

		if (!userAuth) return
		yield getSnapShotFromUserAuth(userAuth)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
	try {
		yield auth.signOut()
		yield put(signOutSuccess())
		yield put(clearCart())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password)
		yield put(signUpSuccess({ user, additionalData: { displayName } }))
	} catch (error) {
		yield put(signUpFailure(error))
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}
export function* onSignUpSuccess() {
	yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(isUserAuthenticated),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	])
}
