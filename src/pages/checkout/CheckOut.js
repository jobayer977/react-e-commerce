import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckOut = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem, i) => (
				<CheckOutItem cartItem={cartItem} key={i} />
			))}
			<div className="total">
				<span>TOTAl : ${total}</span>
				<StripeButton price={total} />
			</div>

			<p className="test-data">
				*Please use the following test credit card for payments* 4242 4242 4242
				4242 -EXP; 01/22 -CW:123
			</p>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
