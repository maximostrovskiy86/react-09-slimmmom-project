import React, { useState } from "react";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import {HeaderStyle, NavigateMenuStyle, Link} from './Navigate.styled';
import Container from "../container";
import Logo from '../logo';
import { ImMenu, ImCross } from "react-icons/im";


const Navigate = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	}
	
	return (
		<HeaderStyle>
			<Container>
				<strong className="logo">
					<Link to="/">
						<Logo/>
					</Link>
				</strong>
				{isLoggedIn ?
					<button className="icon-box" onClick={toggleMenu}>
						{isOpen ? <ImCross size="1.5em"/> : <ImMenu size="1.5em"/>}
					</button> :
					<NavigateMenuStyle>
						<ul>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/registration">Register</Link></li>
						</ul>
						<ul className="list-navigation">
							<li><a href="javascript:void(0)">Diary</a></li>
							<li><a href="javascript:void(0)">Calculator</a></li>
						</ul>
					</NavigateMenuStyle>}
			</Container>
		</HeaderStyle>
	)
}

export default Navigate;