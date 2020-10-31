import React from "react"
import "./App.scss"
import { Redirect, Route, Switch } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import ShopPage from "./pages/shoppage/ShopPage"
import Header from "./components/header/Header"
import SignInAndSignUp from "./pages/sign-in-and-sing-up/SignInAndSignUp"
import { connect } from "react-redux"
import { checkUserSession } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import CheckOut from "./pages/checkout/CheckOut"

class App extends React.Component {
	unsubscribeFromAuth = null

	componentDidMount() {
		const { checkUserSession } = this.props
		checkUserSession()
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
					<Route path="/checkout" component={CheckOut} />
				</Switch>
			</div>
		)
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
