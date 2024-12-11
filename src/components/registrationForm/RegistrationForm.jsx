import React, {useState} from "react";
import {RegistrationFormContainer} from "./RegistrationPage.styled"
import {LoginInputBox} from "../loginForm/LoginForm.styled";
import Button from "../button";


const RegistrationForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'name':
				setName(value);
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
	
	return (
		<RegistrationFormContainer>
			<LoginInputBox>
				<input
					id="name"
					type="text"
					name="name"
					required
					value={name}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="The name can only consist of Latin letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Castelmore d'Artagnan, etc."
					onChange={onHandleChange}
				/>
				<label htmlFor="login">Name</label>
			</LoginInputBox>
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
		</RegistrationFormContainer>
	)
}

export default RegistrationForm;