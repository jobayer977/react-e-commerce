import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/CustomButton";

const CartDropDown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropDown;
