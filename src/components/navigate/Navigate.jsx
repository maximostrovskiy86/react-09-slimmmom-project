import {useSelector} from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import {HeaderStyle, NavigateMenuStyle, Link} from './Navigate.styled';
import Container from "../container";
import Logo from '../logo';
import {FaBars} from "react-icons/fa";



const Navigate = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	return (
		<HeaderStyle>
			<Container>
				<strong className="logo">
					<Link to="/">
						<Logo/>
					</Link>
					{/*{isLoggedIn && <div className="logo-title"><span>Slim</span><span>Mom</span></div>}*/}
				</strong>
				{isLoggedIn ? <div className="icon-box"><FaBars width="100%" height="100%" /></div> :
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