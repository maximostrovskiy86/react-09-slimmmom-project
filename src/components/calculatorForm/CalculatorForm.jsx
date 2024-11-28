import React, {useState} from "react";
import {CalculatorFormContainer, CalculateGroupContainer, FormRadioGroup} from "./CalculatorForm.styled";
import Button from "../button";

const CalculatorForm = ({}) => {
	return (
		<CalculatorFormContainer>
			<CalculateGroupContainer role="group" aria-labelledby="contact-details-head">
				<label>
					Height
					<input type="number" name="height" required/>
				</label>
				<label>
					Age
					<input type="number" name="age" required/>
				</label>
				<label>
					Current age
					<input type="number" name="current-age" minLength="2" maxLength="3" required/>
				</label>
				<label>
					Desired weight
					<input type="number" name="desired-weight"/>
				</label>
				<label>
					Desired weight
					<input type="number" name="desired-weight"/>
				</label>
			</CalculateGroupContainer>
			
			
			<FormRadioGroup>
				<legend className="form-radio-group-title">Blood group</legend>
				<div className="form-field">
					<input type="radio" name="blood-group" value="1" id="first-blood-group"/>
					<label className="form-label" htmlFor="first-blood-group">1</label>
				</div>
				<div className="form-field">
					<input type="radio" name="blood-group" value="2" id="second-blood-group"/>
					<label className="form-label" htmlFor="second-blood-group">2</label>
				</div>
				<div className="form-field">
					<input type="radio" name="blood-group" value="3" id="third-blood-group"/>
					<label className="form-label" htmlFor="third-blood-group">3</label>
				</div>
				<div className="form-field">
					<input type="radio" name="blood-group" value="4" id="fourth-blood-group"/>
					<label className="form-label" htmlFor="fourth-blood-group">4</label>
				</div>
			</FormRadioGroup>
			
			<Button text="Lose weight"/>
		</CalculatorFormContainer>
	)
}

export default CalculatorForm;