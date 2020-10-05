import styled from "styled-components";

export const CheckOutPageStyle = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`;

export const CheckOutHeaderStyle = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockStyle = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

export const CheckOutTotalStyle = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
	text-align: right;
	span {
		display: block;
	}
	button: {
		margin-left: auto;
	}
`;

export const TestWarningStyle = styled.div`
	font-size: 24px;
	color: red;
	font-weight: 500;
	margin: 50px 0;
	text-align: center;
`;
