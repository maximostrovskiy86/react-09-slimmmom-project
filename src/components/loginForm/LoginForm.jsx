import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginFormContainer, LoginInputBox} from "./LoginForm.styled";
import Button from "../button";
import authOperations from "../../redux/auth/authOperations";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password = "2wsx@WSX", setPassword] = useState("2wsx@WSX");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				return;
		}
	}
	
	const onSubmit = async (e) => {
		e.preventDefault();
		const {payload} = await dispatch(authOperations.login({
			email: email,
			password: password,
		}));
		
		setEmail('');
		setPassword('');
		
		if (payload.status === 200) {
			navigate("/", {replace: true});
		}
	}
	
	return (
		<LoginFormContainer onSubmit={onSubmit}>
			<LoginInputBox>
				<input
					id="login"
					type="email"
					name="email"
					required
					value={email}
					// pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
					title="Email must contain the @ symbol and be in the format example@mail.com"
					onChange={onHandleChange}
				/>
				<label htmlFor="login">Login</label>
			</LoginInputBox>
			<LoginInputBox>
				<input
					id="password"
					type="password"
					name="password"
					// required
					value={password}
					// pattern="[0-9a-zA-Z!@#$%^&*]{7,}"
					title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
					onChange={onHandleChange}
				/>
				<label htmlFor="password">Password</label>
			</LoginInputBox>
			<Button>Login</Button>
		</LoginFormContainer>
	
	)
}

export default LoginForm;