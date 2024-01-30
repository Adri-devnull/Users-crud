import UserCard from '../user-card/UserCard';

const UsersList = ({ users, action, updateUser, setUserToEdit }) => {
	return (
		<div>
			<h2>Aqui va la lista de usuarios</h2>
			{users.map(user => (
				<UserCard
					key={user.userId}
					name={user.name}
					email={user.email}
					action={action}
					id={user.userId}
					updateUser={updateUser}
					setUserToEdit={setUserToEdit}
				/>
			))}
		</div>
	);
};

export default UsersList;
