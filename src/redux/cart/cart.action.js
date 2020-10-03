const { CartActionTypes } = require("./cart.types");

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
