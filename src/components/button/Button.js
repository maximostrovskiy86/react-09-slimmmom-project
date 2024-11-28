import React from "react";
import { ButtonContainer } from "./Button.styled";

const Button = ({onClick, text}) => {
	return (
		<ButtonContainer type="submit" onClick={onClick}>
			{text}
		</ButtonContainer>
	);
};

export default Button;
