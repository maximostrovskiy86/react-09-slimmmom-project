import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import LoadingSpinner from "../loadingSpinner";
import Header from "../header";

const SharedLayout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<LoadingSpinner/>}>
				<Outlet/>
			</Suspense>
		</>
	);
};

export default SharedLayout;