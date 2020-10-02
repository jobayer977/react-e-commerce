import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";

const App = () => {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
};

export default App;
