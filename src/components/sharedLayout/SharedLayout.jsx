import React, {Suspense} from "react";
import {Outlet} from "react-router-dom";
import LoadingSpinner from "../loadingSpinner";
import Header from "../header";
import RightSideBar from "../rightSideBar";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";

const SharedLayout = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	return (
		<>
			<Header />
			<Suspense fallback={<LoadingSpinner/>}>
				<Outlet/>
				{/*{isLoggedIn && <RightSideBar/>}*/}
			</Suspense>
		</>
	);
};

export default SharedLayout;