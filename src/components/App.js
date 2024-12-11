import {Routes, Route} from "react-router-dom";
import Container from "./container";
import Navigate from "./navigate";
import CalculatorPage from "../pages/calculatorPage/CalculatorPage";
import LoginPage from "../pages/loginPage";
import SharedLayout from "./sharedLayout";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";

function App() {
	return (
		<>
			<Navigate/>
			<Container>
				<Routes path="/" element={<SharedLayout/>}>
					<Route index path="/" element={<CalculatorPage/>}/>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/registration" element={<RegistrationPage/>}/>
				</Routes>
			</Container>
		</>
	);
}

export default App;
