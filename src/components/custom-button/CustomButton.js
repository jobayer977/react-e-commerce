import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	return (
		<button
			className={`${
				isGoogleSignIn ? "google-sign-in-button" : " "
			} custom-button`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
