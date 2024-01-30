import { useEffect, useState } from 'react';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { URLS } from '../../constants/urls';
import { deleteData, postData } from '../../utils/dataFunctions';
import Form from '../form/Form';
import UpdateForm from '../update-form/UpdateForm';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const Main = () => {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState({});
	const [userToEdit, setUserToEdit] = useState();
	console.log(userToEdit);

	useEffect(() => {
		printUsers(setUsers);
	}, []);

	return (
		<StyledMain>
			<UsersList
				users={users}
				action={id => deleteUser(setUsers, id)}
				updateUser={id => updateUser(userToEdit, setUserToEdit, id)}
				setUserToEdit={setUserToEdit}
			/>
			<Form
				action={(value, name) =>
					getInfoNewUser(value, name, newUser, setNewUser)
				}
				createUser={() => createUser(setUsers, newUser)}
			/>
			{userToEdit && (
				<UpdateForm
					userToEdit={userToEdit}
					setUsertoEdit={setUserToEdit}
					action={id => updateUser(userToEdit, setUsers, id)}
				/>
			)}
		</StyledMain>
	);
};

const getInfoNewUser = (value, name, newUser, setNewUser) => {
	const updatedUser = { ...newUser, [name]: value };
	setNewUser(updatedUser);
};

const printUsers = async setUsers => {
	const response = await fetch(URLS.USER_API);
	const data = await response.json();
	setUsers(data);
};

const createUser = async (setUsers, newUser) => {
	const newUsers = await postData(URLS.USER_API, newUser);
	setUsers(newUsers);
};

const updateUser = async (userToEdit, setUsers, id) => {
	console.log(id);
	const url = `${URLS.USER_API}/${id}`;
	const response = await fetch(url, {
		method: METHODS.PATCH,
		body: JSON.stringify(userToEdit),
		headers: HEADERS
	});

	const data = await response.json();
	setUsers(data);
};

const deleteUser = async (setUsers, id) => {
	const newUsers = await deleteData(`${URLS.USER_API}/${id}`);
	setUsers(newUsers);
};

export default Main;
