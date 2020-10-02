import React, { Component } from "react";
import SHOP_DATA from "../../assets/shopData";
import CollectionPreview from "../../components/collection-preivew/CollectionPreview";

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...collectionOtherProps }) => (
					<CollectionPreview key={id} {...collectionOtherProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
