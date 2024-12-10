import React, {useState,} from "react";
import {useDispatch} from "react-redux";
import {fetchDailyCalorieIntake} from "../../redux/dailyCalorieIntake/dailyCalorieIntake-operations";
import {
	CalculatorFormContainer,
	CalculateGroupContainer,
	FormRadioGroup,
	InputBox
} from "./CalculatorForm.styled";
import Button from "../button";


const CalculatorForm = ({toggleModal}) => {
	const [height, setHeight] = useState(172);
	const [age, setAge] = useState(38);
	const [weight, setWeight] = useState(75);
	const [desiredWeight, setDesiredWeight] = useState(71);
	const [bloodType, setBloodType] = useState(1);
	const dispatch = useDispatch();
	
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'height':
				setHeight(value);
				break;
			case 'age':
				setAge(value);
				break;
			case 'weight':
				setWeight(value);
				break;
			case 'desiredWeight':
				setDesiredWeight(value);
				break;
			case 'bloodType':
				setBloodType(Number(value));
				break;
			default:
				return;
		}
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		await dispatch(fetchDailyCalorieIntake({
			weight,
			height,
			age,
			desiredWeight,
			bloodType
		}))
		
		toggleModal();
	}
	
	return (
		<CalculatorFormContainer onSubmit={handleSubmit}>
			<CalculateGroupContainer role="group" aria-labelledby="contact-details-head">
				<InputBox>
					<input
						id="heightId"
						type="number"
						name="height"
						pattern="^[ 0-9]+$"
						required
						value={height}
						onChange={onHandleChange}
					/>
					<label htmlFor="heightId">Height </label>
				</InputBox>
				<InputBox>
					<input
						id="ageId"
						type="number"
						name="age"
						required
						value={age}
						onChange={onHandleChange}
					/>
					<label htmlFor="ageId">Age</label>
				</InputBox>
				<InputBox>
					<input
						id="weight"
						type="number"
						name="weight"
						minLength="2"
						maxLength="3"
						required
						value={weight}
						onChange={onHandleChange}
					/>
					<label htmlFor="weight">Weight</label>
				</InputBox>
				<InputBox>
					<input
						id="desiredWeightId"
						type="number"
						name="desiredWeight"
						required
						value={desiredWeight}
						onChange={onHandleChange}
					/>
					<label htmlFor="desiredWeightId">Desired weight</label>
				</InputBox>
			</CalculateGroupContainer>
			
			<FormRadioGroup>
				<legend className="form-radio-group-title">Blood group</legend>
				<div className="radio-form-field">
					<input
						type="radio"
						name="bloodType"
						value="1"
						id="first-blood-group"
						onChange={onHandleChange}
					/>
					<label className="form-label" htmlFor="first-blood-group">1</label>
				</div>
				<div className="radio-form-field">
					<input
						type="radio"
						name="bloodType"
						value="2"
						id="second-blood-group"
						onChange={onHandleChange}
					/>
					<label className="form-label" htmlFor="second-blood-group">2</label>
				</div>
				<div className="radio-form-field">
					<input
						type="radio"
						// checked={bloodType === 3}
						name="bloodType"
						value="3"
						id="third-blood-group"
						onChange={onHandleChange}
					/>
					<label className="form-label" htmlFor="third-blood-group">3</label>
				</div>
				<div className="radio-form-field">
					<input
						type="radio"
						name="bloodType"
						value="4"
						id="fourth-blood-group"
						onChange={onHandleChange}
					/>
					<label className="form-label" htmlFor="fourth-blood-group">4</label>
				</div>
			</FormRadioGroup>
			
			<Button>Lose weight</Button>
		</CalculatorFormContainer>
	)
}

export default CalculatorForm;