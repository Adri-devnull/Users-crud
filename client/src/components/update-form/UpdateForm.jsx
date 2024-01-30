const UpdateForm = ({ userToEdit, setUsertoEdit, action }) => {
	return (
		<form onSubmit={event => handleSubmit(event, action, userToEdit.id)}>
			<div>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={userToEdit.name}
						onChange={event =>
							setUsertoEdit({ ...userToEdit, name: event.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						value={userToEdit.email}
						onChange={event =>
							setUsertoEdit({ ...userToEdit, email: event.target.value })
						}
					/>
				</div>
				<div>
					<button>Edit user</button>
				</div>
			</div>
		</form>
	);
};

const handleSubmit = (event, action, id) => {
	event.preventDefault();
	action(id);
};

export default UpdateForm;
