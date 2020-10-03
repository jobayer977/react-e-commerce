import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sing-up/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFormAuth = null;
	componentDidMount() {
		this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
					console.log(this.state);
				});
			}
			this.setState({ currentUser: userAuth });
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
