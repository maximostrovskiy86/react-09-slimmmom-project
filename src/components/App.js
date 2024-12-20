import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import authOperations from "../redux/auth/authOperations";
import {getAccessToken, getIsLoggedIn, getUserSid, getIsLoading} from "../redux/auth/authSelectors";
import Navigate from "./navigate";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage";
import SharedLayout from "./sharedLayout";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";
import LoadingSpinner from "./loadingSpinner/LoadingSpinner";
import {ToastContainer} from 'react-toastify';

function App() {
	// const dispatch = useDispatch();
	// const sid = useSelector(getUserSid);
	// const isAccessToken = useSelector(getAccessToken);
	// const isLoggedIn = useSelector(getIsLoggedIn);
	const isLoading = useSelector(getIsLoading);
	
	// useEffect(() => {
	// 	isAccessToken && isLoggedIn && dispatch(authOperations.refreshCurrentUser(
	// 		{"sid": sid}
	// 	));
	// }, [dispatch])
	
	
	return (
		<>
			{isLoading ? <LoadingSpinner/> :
				<Routes>
					<Route path="/" element={<SharedLayout/>}>
						<Route index path="/" element={<MainPage/>}/>
						<Route path="/login" element={<LoginPage/>}/>
						<Route path="/registration" element={<RegistrationPage/>}/>
					</Route>
				</Routes>
			}
			
			<ToastContainer/>
		</>
	);
}

export default App;
