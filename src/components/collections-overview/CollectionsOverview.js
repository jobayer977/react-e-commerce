import React from "react";
import "./collection-overview.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preivew/CollectionPreview";
import "./collection-overview.style.scss";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...collectionOtherProps }) => (
				<CollectionPreview key={id} {...collectionOtherProps} />
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
