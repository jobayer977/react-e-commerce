import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

const hatsPage = (props) => {
	console.log(props);
	return <h1>Hello</h1>;
};
const App = () => {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop/hats" component={hatsPage} />
			</Switch>
		</div>
	);
};

export default App;
