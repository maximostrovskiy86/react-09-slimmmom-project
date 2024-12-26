import React, { useState } from "react";
import {DiaryAddProductFormContainer} from "./DiaryAddProductFormStyled";
import {InputBox} from "../calculatorForm/CalculatorForm.styled";
import Button from "../button";


const DiaryAddProductForm = () => {
	const [nameProduct, setNameProduct] = useState("");
	const [weight, setWeight] = useState("");
	
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'nameProduct':
				setNameProduct(value);
				break;
			case 'weight':
				setWeight(value);
				break;
			default:
				return;
		}
	}
	
	const onSubmit = (e) => {
		e.preventDefault();
	}
	
	return (
		<DiaryAddProductFormContainer onSubmit={onSubmit}>
			<InputBox>
				<input
					id="productName"
					type="text"
					name="productName"
					required
					value={nameProduct}
					// pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
					title="Email must contain the @ symbol and be in the format example@mail.com"
					onChange={onHandleChange}
				/>
				<label htmlFor="productName">Enter product name</label>
			</InputBox>
			<InputBox>
				<input
					id="weight"
					type="number"
					name="weight"
					required
					value={weight}
					// pattern="[0-9a-zA-Z!@#$%^&*]{7,}"
					title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
					onChange={onHandleChange}
				/>
				<label htmlFor="weight">Grams</label>
			</InputBox>
			<Button>Add</Button>
		</DiaryAddProductFormContainer>
	)
}

export default DiaryAddProductForm;