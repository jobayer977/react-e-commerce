import styled from "styled-components";

export const CollectionPageStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleStyle = styled.div`
	font-size: 38px;
	margin: 0 auto 30px;
	text-transform: uppercase;
`;

export const ItemsStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	& .collection-item {
		margin-bottom: 30px;
	}
`;
