import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropDown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems &&
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};
const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropDown);
