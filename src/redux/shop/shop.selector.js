import { createSelector } from "reselect";

//GET SHOP STATE
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);
