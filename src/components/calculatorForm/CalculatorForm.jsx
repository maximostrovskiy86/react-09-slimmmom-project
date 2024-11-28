import React, {useState} from "react";
import {CalculatorFormContainer, CalculateGroupContainer, FormRadioGroup, InputBox} from "./CalculatorForm.styled";
import Button from "../button";

const CalculatorForm = ({}) => {
	return (
		<CalculatorFormContainer>
			<CalculateGroupContainer role="group" aria-labelledby="contact-details-head">
				<InputBox>
					<input id="heightId" type="number" name="height" pattern="^[ 0-9]+$" required/>
					<label htmlFor="heightId">Height </label>
				</InputBox>
				<InputBox>
					<input id="ageId" type="number" name="age" required/>
					<label htmlFor="ageId">Age</label>
				</InputBox>
				<InputBox>
					<input id="CurrentAgeId" type="number" name="current-age" minLength="2" maxLength="3" required/>
					<label htmlFor="CurrentAgeId">Current age</label>
				</InputBox>
				<InputBox>
					<input id="desiredWeightId" type="number" name="desired-weight"/>
					<label htmlFor="desiredWeightId">Desired weight</label>
				</InputBox>
				<InputBox>
					<input id="desiredWeightid" type="number" name="desired-weight"/>
					<label htmlFor="desiredWeightid">Desired weight</label>
				</InputBox>
			</CalculateGroupContainer>
			
			<FormRadioGroup>
				<legend className="form-radio-group-title">Blood group</legend>
				<div className="radio-form-field">
					<input type="radio" name="blood-group" value="1" id="first-blood-group"/>
					<label className="form-label" htmlFor="first-blood-group">1</label>
				</div>
				<div className="radio-form-field">
					<input type="radio" name="blood-group" value="2" id="second-blood-group"/>
					<label className="form-label" htmlFor="second-blood-group">2</label>
				</div>
				<div className="radio-form-field">
					<input type="radio" name="blood-group" value="3" id="third-blood-group"/>
					<label className="form-label" htmlFor="third-blood-group">3</label>
				</div>
				<div className="radio-form-field">
					<input type="radio" name="blood-group" value="4" id="fourth-blood-group"/>
					<label className="form-label" htmlFor="fourth-blood-group">4</label>
				</div>
			</FormRadioGroup>
			
			<Button text="Lose weight"/>
		</CalculatorFormContainer>
	)
}

export default CalculatorForm;