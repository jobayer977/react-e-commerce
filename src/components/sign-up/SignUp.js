import React from "react"
import "./signup.style.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { signUpStart } from "../../redux/user/user.actions"
import { connect } from "react-redux"
import { useState } from "react"

const SignUp = ({ signUpStart }) => {
	const [userCredential, setUserCredential] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassWord: "",
	})
	const { displayName, email, password, confirmPassWord } = userCredential
	const handleSubmit = async (e) => {
		e.preventDefault()

		if (password !== confirmPassWord) {
			alert("Password don't match")
			return
		}
		signUpStart({
			displayName,
			email,
			password,
		})
	}
	const handleChange = (e) => {
		const { name, value } = e.target
		setUserCredential({ ...userCredential, [name]: value })
	}

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="DisplayName"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassWord"
					value={confirmPassWord}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})
export default connect(null, mapDispatchToProps)(SignUp)
