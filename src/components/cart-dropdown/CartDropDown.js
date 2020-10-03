import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown = ({ cartItems, dispatch, history }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems &&
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your Cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					dispatch(toggleCartHidden());
					history.push("/checkout");
				}}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
