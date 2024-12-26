import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import {HeaderStyle, NavigateMenuStyle, Link, Menu} from './Navigate.styled';
import Container from "../container";
import Logo from '../logo';
import {ImMenu, ImCross} from "react-icons/im";


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
					<Menu>
						<button className="icon-box" onClick={toggleMenu}>
							{isOpen ? <ImCross size="1.75em" color="#212121"/> : <ImMenu size="1.75em"/>}
						</button>
						{isOpen && <div className="menu-box">
							<ul className="list-navigation" onClick={toggleMenu}>
								<li><Link to="/dairy">Diary</Link></li>
								<li><Link to="/calculator">Calculator</Link></li>
							</ul>
						</div>
						}
					</Menu> :
					<NavigateMenuStyle>
						<ul>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/registration">Register</Link></li>
						</ul>
					</NavigateMenuStyle>}
			</Container>
		</HeaderStyle>
	)
}

export default Navigate;