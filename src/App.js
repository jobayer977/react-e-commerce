import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sing-up/SignInAndSignUp";

const App = () => {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUp} />
			</Switch>
		</div>
	);
};

export default App;
