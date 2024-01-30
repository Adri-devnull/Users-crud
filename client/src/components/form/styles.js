import styled from 'styled-components';

const StyledForm = styled.form`
	padding: 30px 50px;
	background-color: grey;
	height: 400px;
`;

const StyledBoxes = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100%;
`;

const StyledInput = styled.input`
	height: 30px;
	width: 220px;
	border-radius: 10px;
	border: none;
	outline: none;
	font-size: 1.1em;
`;

export { StyledBoxes, StyledContainer, StyledForm, StyledInput };
