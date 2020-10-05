import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selector";

import {
	CollectionPageStyle,
	ItemsStyle,
	TitleStyle,
} from "./collectionpage.styles";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;

	return (
		<CollectionPageStyle>
			<TitleStyle>{title}</TitleStyle>
			<ItemsStyle>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsStyle>
		</CollectionPageStyle>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
