import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {CalculatorPageContainer} from "./MainPage.styled";
import {getDailyCalorieIntake} from "../../redux/dailyCalorieIntake/dailyCalorieIntake-selectors";
import HeadTitle from "../../components/headTitle";
import CalculatorForm from "../../components/calculatorForm";
import Modal from "../../components/modal";
import DailyCalorieIntake from "../../components/dailyCalorieIntake";
import {ReactComponent as GoBack} from "../../images/modal/cross-arrow.svg";
import IconButton from "../../components/iconButton";


const MainPage = () => {
	const [showModal, setShowModal] = useState(false);
	
	const userDailyRate = useSelector(getDailyCalorieIntake);
	const titleCalculatePage = 'Calculate your daily calorie intake right now';
	
	const toggleModal = () => {
		setShowModal(state => !state)
	}
	
	return (
		<CalculatorPageContainer>
			<HeadTitle text={titleCalculatePage}/>
			<CalculatorForm toggleModal={toggleModal}/>
			
			{showModal && userDailyRate &&
			<Modal toggleModal={toggleModal}>
				<div className="modal-header">
					<IconButton toggleModal={toggleModal} aria-label="Go Back">
						<GoBack width={17} height={10}/>
					</IconButton>
				</div>
				<DailyCalorieIntake userDailyRate={userDailyRate}/>
			</Modal>}
		</CalculatorPageContainer>
	)
}

export default MainPage;