import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Container from "../container";
import Navigation from "../navigate";
import LoadingSpinner from "../loadingSpinner";

const SharedLayout = () => {
	return (
		<Container>
			<Navigation/>
			<Suspense fallback={<LoadingSpinner/>}>
				<Outlet/>
			</Suspense>
		</Container>
	);
};

export default SharedLayout;