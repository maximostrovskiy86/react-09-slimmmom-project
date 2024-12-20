import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {MainPageContainer} from "./MainPage.styled";
import {getDailyCalorieIntake} from "../../redux/dailyCalorieIntake/dailyCalorieIntake-selectors";
import HeadTitle from "../../components/headTitle";
import CalculatorForm from "../../components/calculatorForm";
import Modal from "../../components/modal";
import DailyCalorieIntake from "../../components/dailyCalorieIntake";
import {ReactComponent as GoBack} from "../../images/modal/cross-arrow.svg";
import IconButton from "../../components/iconButton";
import Container from "../../components/container";
import RightSideBar from "../../components/rightSideBar";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";


const MainPage = () => {
	const [showModal, setShowModal] = useState(false);
	const userDailyRate = useSelector(getDailyCalorieIntake);
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	
	const toggleModal = () => {
		setShowModal(state => !state)
	}
	
	return (
		<>
			<MainPageContainer>
				<Container>
					<HeadTitle>Calculate your daily calorie intake right now</HeadTitle>
					<CalculatorForm toggleModal={toggleModal}/>
				</Container>
			
			</MainPageContainer>
			{isLoggedIn && <RightSideBar/>}
			
			{showModal && userDailyRate &&
				<Modal toggleModal={toggleModal}>
					<div className="modal-header">
						<IconButton toggleModal={toggleModal} aria-label="Go Back">
							<GoBack width={17} height={10}/>
						</IconButton>
					</div>
					<Container>
						<HeadTitle>Your recommended daily calorie intake is</HeadTitle>
						<DailyCalorieIntake userDailyRate={userDailyRate}/>
					</Container>
				</Modal>}
		</>
	)
}

export default MainPage;