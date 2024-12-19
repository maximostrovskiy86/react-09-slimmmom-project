import {RightSideBarContainer, SummaryItem} from "./RightSideBar.styled";
import { useSelector } from "react-redux";
import Container from "../container";
import {getIsLoginUser} from "../../redux/auth/authSelectors";

const RightSideBar = () => {
	
	// const userData = useSelector(getUser);
	
	// console.log("userData", userData);
	return (
		<RightSideBarContainer>
			<Container>
				<h3>Summary for date</h3>
				<SummaryItem><span>Left</span><span>kcal</span></SummaryItem>
				<SummaryItem><span>Consumed</span><span>kcal</span></SummaryItem>
				<SummaryItem><span>Daily Rate</span><span>kcal</span></SummaryItem>
				<SummaryItem><span>% Of Daily Rate</span><span>kcal</span></SummaryItem>
				<h3>Not recommended products</h3>
				<ul>
				
				</ul>
			</Container>
		</RightSideBarContainer>
	)
}

export default RightSideBar;