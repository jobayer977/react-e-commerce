import React, { Component } from "react"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import { Route } from "react-router-dom"
import CollectionPage from "../collection/CollectionPage"

import { connect } from "react-redux"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"
import { createStructuredSelector } from "reselect"
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector"
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container"
import CollectionPageContainer from "../collection/collection.container"

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props
		fetchCollectionsStartAsync()
	}

	render() {
		const { match } = this.props

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
