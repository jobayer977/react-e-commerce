import React, { Component } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions"
import CustomButton from "../custom-button/CustomButton"
import FormInput from "../form-input/FormInput"
import "./signin.style.scss"

const SignIn = ({ emailSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	})
	const { email, password } = userCredentials
	const handleSubmit = async (e) => {
		e.preventDefault()
		emailSignInStart(email, password)
	}

	const handleChange = (e) => {
		const { value, name } = e.target
		setUserCredentials({
			...userCredentials,
			[name]: value,
		})
	}
	const { googleSignInStart } = userCredentials
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and Password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
})
export default connect(null, mapDispatchToProps)(SignIn)
