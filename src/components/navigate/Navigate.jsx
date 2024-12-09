import {HeaderStyle, NavigateMenuStyle, Link} from './Navigate.styled';
import Container from "../container";
import Logo from '../logo';

const Navigate = () => {
	return (
		<HeaderStyle>
			<Container>
				<strong className="logo">
					<Link to="/">
						<Logo/>
					</Link>
				</strong>
				<NavigateMenuStyle>
					<ul>
						<li><Link to="/login">Login</Link></li>
						<li><Link href="/register">Register</Link></li>
					</ul>
				</NavigateMenuStyle>
			</Container>
		</HeaderStyle>
	)
}

export default Navigate;