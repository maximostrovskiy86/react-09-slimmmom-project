import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Container from "../container";
import Navigation from "../navigate";

const SharedLayout = () => {
	return (
		<Container>
			<Navigation/>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet/>
			</Suspense>
		</Container>
	);
};

export default SharedLayout;