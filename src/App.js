import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sing-up/SignInAndSignUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFormAuth = null;
	componentDidMount() {
		this.unsubscribeFormAuth = auth.onAuthStateChanged((user) => {
			this.setState({
				currentUser: user,
			});
			console.log(this.state.currentUser);
		});
	}
	componentWillUnmount() {
		this.unsubscribeFormAuth();
	}

	render() {
		return (
			<div className="app">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}
export default App;
