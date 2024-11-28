import {HeaderStyle, NavigateMenuStyle} from './Navigate.styled';
import Container from "../container";
import Logo from '../logo';

const Navigate = () => {
	return (
		<HeaderStyle>
			<Container>
				<strong className="logo">
					<a href="./index.html"><Logo/></a>
				</strong>
				<NavigateMenuStyle>
					<ul>
						<li><a href="#">Login</a></li>
						<li><a href="#">Register</a></li>
					</ul>
				</NavigateMenuStyle>
			</Container>
		</HeaderStyle>
	)
}

export default Navigate;