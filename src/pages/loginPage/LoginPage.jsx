import { LoginPageContainer } from "./LoginPage.styled";
import LoginForm from '../../components/loginForm';
import HeadTitle from "../../components/headTitle";

const LoginPage = () => {
	return (
		<LoginPageContainer>
			<HeadTitle text="Login" />
			<LoginForm/>
		</LoginPageContainer>
	)
}

export default LoginPage;