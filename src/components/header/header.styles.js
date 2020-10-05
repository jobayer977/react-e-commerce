import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainerStyle = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoStyle = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px 0;
`;

export const OptionsStyle = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLinkStyle = styled(Link)`
	text-transform: uppercase;
	text-decoration: none;
	padding: 10px 15px;
	cursor: pointer;
	text-transform: uppercase;
`;
