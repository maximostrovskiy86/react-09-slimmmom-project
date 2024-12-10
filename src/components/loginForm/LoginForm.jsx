import React, {useState, useEffect} from "react";
import {LoginFormContainer, LoginInputBox} from "./LoginForm.styled";
import Button from "../button";

const LoginForm = () => {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
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
	
	return (
		<LoginFormContainer action="">
			<LoginInputBox>
				<input
					id="login"
					type="email"
					name="email"
					required
					value={email}
					pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
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
					required
					value={password}
					pattern="[0-9a-zA-Z!@#$%^&*]{7,}"
					title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
					onChange={onHandleChange}
				/>
				<label htmlFor="password">Password</label>
			</LoginInputBox>
			<Button>Login</Button>
			<Button>Registration</Button>
		</LoginFormContainer>
	
	)
}

export default LoginForm;