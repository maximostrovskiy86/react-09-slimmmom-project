import {UserInfoWrapper} from "./UserInfo.styled";
import { useSelector } from "react-redux";
import Container from "../container";
import {getUserData} from "../../redux/auth/authSelectors";

const UserInfo = ({onLogOut}) => {
	const  username  = useSelector(getUserData);
	console.log("userInfo", username);
	return (
		<UserInfoWrapper>
			<Container>
				<span>{username && username}</span>
				<button type="button" onClick={onLogOut}>Log Out</button>
			</Container>
		</UserInfoWrapper>
	)
}

export default UserInfo;