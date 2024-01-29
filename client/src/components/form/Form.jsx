import { StyledForm } from './styles';

const Form = () => {
	return (
		<StyledForm action=''>
			<div>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor='profile'>Profile</label>
					<input type='text' name='profile' />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' />
				</div>
				<div>
					<label htmlFor='number'>Number</label>
					<input type='text' name='number' />
				</div>
				<div>
					<button>Choose avatar</button>
					<button>Create user</button>
				</div>
				<div>
					<img src='' alt='' />
				</div>
			</div>
		</StyledForm>
	);
};

export default Form;
