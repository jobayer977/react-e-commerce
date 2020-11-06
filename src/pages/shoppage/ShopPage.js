import React, { lazy, Suspense, useEffect } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
import { createStructuredSelector } from "reselect"
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector"
import Spinner from "../../components/spinner/Spinner"
const CollectionPageContainer = lazy(() =>
	import("../collection/collection.container")
)
const CollectionsOverviewContainer = lazy(() =>
	import("../../components/collections-overview/collections-overview.container")
)
const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])
	return (
		<div className="shop-page">
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
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
