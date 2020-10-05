import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import {
	CheckOutHeaderStyle,
	CheckOutPageStyle,
	CheckOutTotalStyle,
	HeaderBlockStyle,
	TestWarningStyle,
} from "./checkout.styles";

const CheckOut = ({ cartItems, total }) => {
	return (
		<CheckOutPageStyle>
			<CheckOutHeaderStyle>
				<HeaderBlockStyle>
					<span>Product</span>
				</HeaderBlockStyle>
				<HeaderBlockStyle>
					<span>Description</span>
				</HeaderBlockStyle>
				<HeaderBlockStyle>
					<span>Quantity</span>
				</HeaderBlockStyle>
				<HeaderBlockStyle>
					<span>Price</span>
				</HeaderBlockStyle>
				<HeaderBlockStyle>
					<span>Remove</span>
				</HeaderBlockStyle>
			</CheckOutHeaderStyle>
			{cartItems.map((cartItem, i) => (
				<CheckOutItem cartItem={cartItem} key={i} />
			))}
			<CheckOutTotalStyle>
				<span>TOTAl : ${total}</span>
				<StripeButton price={total} />
			</CheckOutTotalStyle>

			<TestWarningStyle as="p">
				*Please use the following test credit card for payments* 4242 4242 4242
				4242 -EXP; 01/22 -CW:123
			</TestWarningStyle>
		</CheckOutPageStyle>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
