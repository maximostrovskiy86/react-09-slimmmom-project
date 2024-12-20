import React from "react";
import { HeaderContainer } from './Header.styled';
import UserInfo from "../userInfo";
import authOperations from "../../redux/auth/authOperations";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import Navigate from "../navigate";


const Header = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	const onLogOut = () => {
		dispatch(authOperations.logOut())
	}
	
	return (
		<HeaderContainer>
			<Navigate/>
			{isLoggedIn && <UserInfo onLogOut={onLogOut}/>}
		</HeaderContainer>
	)
}

export default Header;