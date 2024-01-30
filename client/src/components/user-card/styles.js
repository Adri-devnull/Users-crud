import styled from 'styled-components';

const UserCardInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const UserCardContainer = styled.div`
	display: flex;
	align-items: center;
`;

const UserCardButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export { UserCardButton, UserCardContainer, UserCardInfo };
