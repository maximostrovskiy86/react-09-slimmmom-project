import {LoginPageContainer} from "./LoginPage.styled";
import LoginForm from '../../components/loginForm';
import HeadTitle from "../../components/headTitle";
import Container from "../../components/container";

const LoginPage = () => {
	return (
		<Container>
			<LoginPageContainer>
				<HeadTitle>Login</HeadTitle>
				<LoginForm/>
			</LoginPageContainer>
		</Container>
	)
}

export default LoginPage;