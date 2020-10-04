import React from "react";
import "./stripe-button.style.scss";
import StripeCheckOut from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishabelKey = "pk_test_UJgimWFlD8dpdPZsSJtE6CIu00Uy6IFRpZ";
	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};
	return (
		<StripeCheckOut
			label="Pay Now"
			name="CRWN Clothing LTD"
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishabelKey}
		/>
	);
};

export default StripeButton;
