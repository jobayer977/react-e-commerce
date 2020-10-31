import React from "react"
import "./signup.style.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import { signUpStart } from "../../redux/user/user.actions"
import { connect } from "react-redux"

class SignUp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassWord: "",
		}
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		const { signUpStart } = this.props
		const { displayName, email, password, confirmPassWord } = this.state
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
	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}
	render() {
		const { displayName, email, password, confirmPassWord } = this.state
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="DisplayName"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassWord"
						value={confirmPassWord}
						onChange={this.handleChange}
						label="Confirem Password"
						required
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})
export default connect(null, mapDispatchToProps)(SignUp)
