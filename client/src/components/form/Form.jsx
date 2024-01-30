import {
	StyledBoxes,
	StyledContainer,
	StyledForm,
	StyledInput
} from './styles';

const Form = ({ action, createUser }) => {
	return (
		<StyledForm action=''>
			<StyledContainer>
				<StyledBoxes>
					<label htmlFor='name'>Name</label>
					<StyledInput
						type='text'
						name='name'
						onChange={() => action(event.target.value, event.target.name)}
					/>
				</StyledBoxes>
				<StyledBoxes>
					<label htmlFor='email'>Email</label>
					<StyledInput
						type='text'
						name='email'
						onChange={() => action(event.target.value, event.target.name)}
					/>
				</StyledBoxes>
				<div>
					<button onClick={createUser}>Create user</button>
				</div>
			</StyledContainer>
		</StyledForm>
	);
};

export default Form;
