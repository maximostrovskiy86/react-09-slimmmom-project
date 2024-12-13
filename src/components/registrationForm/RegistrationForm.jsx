import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {RegistrationFormContainer} from "./RegistrationForm.styled"
import {LoginInputBox} from "../loginForm/LoginForm.styled";
import Button from "../button";
import authOperations from "../../redux/auth/auth-operations";


const RegistrationForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'username':
				setUsername(value);
				break;
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
	
	const onSubmit = (event) => {
		event.preventDefault();
		
		dispatch(authOperations.register({
			email,
			username,
			password,
			// "email": "slon.2786@gmail.com",
			// "password": "2wsx@WSX",
			// "name": "credentials.name",
		}))
		
		resetForm();
	}
	
	const resetForm = () => {
		setUsername("");
		setEmail("");
		setPassword("");
	}
	
	return (
		<RegistrationFormContainer onSubmit={onSubmit}>
			<LoginInputBox>
				<input
					id="name"
					type="text"
					name="username"
					required
					value={username}
					// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="The name can only consist of Latin letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Castelmore d'Artagnan, etc."
					onChange={onHandleChange}
				/>
				<label htmlFor="name">Name</label>
			</LoginInputBox>
			<LoginInputBox>
				<input
					id="login"
					type="email"
					name="email"
					required
					value={email}
					// pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
					title="Email must contain the @ symbol and be in the for	mat example@mail.com"
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
		</RegistrationFormContainer>
	)
}

export default RegistrationForm;