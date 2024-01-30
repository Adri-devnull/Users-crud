import { UserCardButton, UserCardContainer, UserCardInfo } from './styles';

const UserCard = ({ id, name, email, action, updateUser, setUserToEdit }) => {
	return (
		<UserCardContainer>
			<UserCardInfo>
				<h2>{name}</h2>
				<h3>{email}</h3>
			</UserCardInfo>
			<div>
				<UserCardButton onClick={() => setUserToEdit({ id, name, email })}>
					<img src='edit.svg'></img>
				</UserCardButton>
				<UserCardButton onClick={() => action(id)}>
					<img src='delete.svg'></img>
				</UserCardButton>
			</div>
		</UserCardContainer>
	);
};

export default UserCard;
