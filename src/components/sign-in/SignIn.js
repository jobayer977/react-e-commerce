import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signin.style.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			email: "",
			password: "",
		});
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I alerady have an account</h2>
				<span>Sign in with your email and Password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
