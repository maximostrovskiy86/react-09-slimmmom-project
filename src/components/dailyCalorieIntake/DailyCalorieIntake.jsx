import React from "react";
import {DailyCalorieIntakeContainer, DailyCalorieIntakeList} from "./DailyCalorieIntake.styled";
import Button from "../button";


const DailyCalorieIntake = ({userDailyRate: {dailyRate, notAllowedProducts}}) => {
	
	return (
		<DailyCalorieIntakeContainer>
			<div className="calories">{dailyRate}<span>kcal</span></div>
			<div className="not-allowed-products-box">
				<h2>Foods that you should not eat</h2>
				<DailyCalorieIntakeList>
					{notAllowedProducts.slice(0, 5).map((product, index) => {
						return <li key={product}>{index + 1}. {product}</li>
					})}
				</DailyCalorieIntakeList>
				<Button>Lose weight</Button>
			</div>
		</DailyCalorieIntakeContainer>
	)
}

export default DailyCalorieIntake;