import Container from "./container";
import Navigate from "./navigate";
import CalculatorPage from "../pages/calculatorPage/CalculatorPage";

function App() {
	return (
		<>
			<Navigate/>
			<Container>
				<CalculatorPage/>
			</Container>
		</>
	);
}

export default App;
