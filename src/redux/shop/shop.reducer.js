import SHOP_DATA from "../../assets/shopData";

const INITIAL_STATE = {
	collections: SHOP_DATA,
};
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
export default shopReducer;
