import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import {
	HeaderContainerStyle,
	LogoStyle,
	OptionsStyle,
	OptionLinkStyle,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainerStyle>
			<LogoStyle to="/">
				<Logo />
			</LogoStyle>
			<OptionsStyle>
				<OptionLinkStyle to="/shop">SHOP</OptionLinkStyle>
				<OptionLinkStyle to="/shop">contact</OptionLinkStyle>
				{currentUser ? (
					<OptionLinkStyle as="div" onClick={() => auth.signOut()}>
						Sign Out
					</OptionLinkStyle>
				) : (
					<OptionLinkStyle to="/signin">Sign In</OptionLinkStyle>
				)}
				<CartIcon />
			</OptionsStyle>
			{hidden ? null : <CartDropDown />}
		</HeaderContainerStyle>
	);
};
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
