import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import authOperations from "../redux/auth/authOperations";
import Navigate from "./navigate";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage";
import SharedLayout from "./sharedLayout";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";
import {ToastContainer} from 'react-toastify';
import {getAccessToken, getIsLoggedIn, getUserSid} from "../redux/auth/authSelectors";

function App() {
	const dispatch = useDispatch();
	const sid = useSelector(getUserSid);
	const isAccessToken = useSelector(getAccessToken);
	const isLoggedIn = useSelector(getIsLoggedIn);

	// useEffect(() => {
	// 	isAccessToken && isLoggedIn && dispatch(authOperations.refreshCurrentUser(
	// 		{"sid": sid}
	// 	));
	// }, [dispatch])
	
	return (
		<>
			<Navigate/>
			<Routes path="/" element={<SharedLayout/>}>
				<Route index path="/" element={<MainPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
				<Route path="/registration" element={<RegistrationPage/>}/>
			</Routes>
			<ToastContainer/>
		</>
	);
}

export default App;
