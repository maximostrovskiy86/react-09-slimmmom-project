import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {MainPageContainer} from "./MainPage.styled";
import {getDailyCalorieIntake} from "../../redux/dailyCalorieIntake/dailyCalorieIntake-selectors";
import HeadTitle from "../../components/headTitle";
import CalculatorForm from "../../components/calculatorForm";
import Modal from "../../components/modal";
import DailyCalorieIntake from "../../components/dailyCalorieIntake";
import {ReactComponent as GoBack} from "../../images/modal/cross-arrow.svg";
import IconButton from "../../components/iconButton";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import UserInfo from "../../components/userInfo";
import Container from "../../components/container";
import authOperations from "../../redux/auth/authOperations";



const MainPage = () => {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const userDailyRate = useSelector(getDailyCalorieIntake);
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	const toggleModal = () => {
		setShowModal(state => !state)
	}
	
	const onLogOut = () => {
		dispatch(authOperations.logOut())
	}
	
	return (
		<MainPageContainer>
			{isLoggedIn && <UserInfo onLogOut={onLogOut}/>}
			<Container>
				<HeadTitle>Calculate your daily calorie intake right now</HeadTitle>
				<CalculatorForm toggleModal={toggleModal}/>
			</Container>
			
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
		</MainPageContainer>
	)
}

export default MainPage;