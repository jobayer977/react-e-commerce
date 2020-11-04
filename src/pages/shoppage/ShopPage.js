import React, { useEffect } from "react"

import { Route } from "react-router-dom"

import { connect } from "react-redux"
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
import { createStructuredSelector } from "reselect"
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector"
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container"
import CollectionPageContainer from "../collection/collection.container"

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])
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

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
