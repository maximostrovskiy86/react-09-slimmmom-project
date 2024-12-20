import styled from "@emotion/styled";
import {LoginFormContainer} from "../loginForm/LoginForm.styled";


export const DiaryAddProductFormContainer = styled(LoginFormContainer)`
	padding-top: 70px;
	
	div label {
		top: 0;
		color: ${props => props.theme.colors.primary};
	}
	
	button {
		margin-top: 60px;
	}
`;