import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import HeadTitle from "../../components/headTitle";
import {RegistrationPageContainer} from "./RegistrationPage.styled";
import Container from "../../components/container";

const RegistrationPage = () => {
	return (
		<Container>
			<RegistrationPageContainer>
				<HeadTitle>Registration</HeadTitle>
				<RegistrationForm/>
			</RegistrationPageContainer>
		</Container>
	
	)
}

export default RegistrationPage;