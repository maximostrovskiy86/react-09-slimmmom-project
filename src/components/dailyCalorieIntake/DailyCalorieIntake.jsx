import React from "react";
import {DailyCalorieIntakeContainer, DailyCalorieIntakeList} from "./DailyCalorieIntake.styled";
import HeadTitle from "../headTitle";
import Button from "../button";


const DailyCalorieIntake = ({userDailyRate: {dailyRate, notAllowedProducts}}) => {
	
	return (
		<DailyCalorieIntakeContainer>
			<HeadTitle text='Your recommended daily calorie intake is'/>
			<div className="calories">{dailyRate}<span>kcal</span></div>
			<div className="not-allowed-products-box">
				<h2>Foods that you should not eat</h2>
				<DailyCalorieIntakeList>
					{notAllowedProducts.slice(0, 5).map((product, index) => {
						return <li key={product}>{index + 1}. {product}</li>
					})}
				</DailyCalorieIntakeList>
				<div className='button-container'><Button text="Lose weight"/></div>
			</div>
		</DailyCalorieIntakeContainer>
	)
}

export default DailyCalorieIntake;