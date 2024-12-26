import {CalculatorPageContainer} from "./CalculatorPage.styled"
import CalculatorForm from "../../components/calculatorForm";
import Container from "../../components/container"

const CalculatorPage = () => {
	return (
		<CalculatorPageContainer>
			<Container>
				<CalculatorForm/>
			</Container>
		</CalculatorPageContainer>
	);
}

export default CalculatorPage;
