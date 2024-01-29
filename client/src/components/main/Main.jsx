import Form from '../form/Form';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<Form />
			<UsersList />
		</StyledMain>
	);
};

export default Main;
