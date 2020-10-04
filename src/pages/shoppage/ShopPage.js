import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SHOP_DATA from "../../assets/shopData";
import CollectionPreview from "../../components/collection-preivew/CollectionPreview";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";

const ShopPage = () => {
	return (
		<div className="shop-page">
			<CollectionsOverview />
		</div>
	);
};

export default ShopPage;
