import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";
import {
	convertCollectionsSnapshotToMap,
	firestore,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollection } = this.props;
		const collectinRef = firestore.collection("collections");
		collectinRef.onSnapshot(async (data) => {
			const collectionmap = convertCollectionsSnapshotToMap(data);
			updateCollection(collectionmap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollection: (collectionMap) =>
		dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
