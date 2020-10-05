import React from "react";
import { CustomButtonContainerStyle } from "./custom-button.style";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<CustomButtonContainerStyle {...otherProps}>
			{children}
		</CustomButtonContainerStyle>
	);
};

export default CustomButton;
