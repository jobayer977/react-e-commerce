import React from "react";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	removeItem,
	addItem,
} from "../../redux/cart/cart.action";
import "./checkout.item.style.scss";

const CheckOutItem = ({ clearItem, cartItem, removeItem, addItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
