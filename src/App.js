import React, { Suspense, lazy, useEffect } from "react"
import "./App.scss"
import { Redirect, Route, Switch } from "react-router-dom"
import Header from "./components/header/Header"
import { connect } from "react-redux"
import { checkUserSession } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import CheckOut from "./pages/checkout/CheckOut"
import Spinner from "./components/spinner/Spinner"

const Homepage = lazy(() => import("./pages/homepage/Homepage"))
const ShopPage = lazy(() => import("./pages/shoppage/ShopPage"))
const SignInAndSignUp = lazy(() =>
	import("./pages/sign-in-and-sing-up/SignInAndSignUp")
)

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])
	return (
		<div className="app">
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
					<Route path="/checkout" component={CheckOut} />
				</Suspense>
			</Switch>
		</div>
	)
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
