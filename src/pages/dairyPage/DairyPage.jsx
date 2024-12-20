import React, {useState} from "react";
import {DairyPageContainer} from "./DairyPage.styled";
import DiaryDateCalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import {FaPlus} from "react-icons/fa";
import Container from "../../components/container";
import Button from "../../components/button";
import Modal from "../../components/modal";
import DiaryAddProductForm from "../../components/diaryAddProductForm";
import IconButton from "../../components/iconButton";
import {ReactComponent as GoBack} from "../../images/modal/cross-arrow.svg";




const DairyPage = () => {
	const [date, setDate] = useState(new Date());
	const [isOpen, setIsOpen] = useState(false);
	
	const toggleModal = () => {
		setIsOpen(prev => !prev);
	}
	
	return (
		<DairyPageContainer>
			<Container>
				<DiaryDateCalendar selectDate={setDate} date={date}/>
				<Button type="button" onClick={toggleModal}>
					<FaPlus/>
				</Button>
				{isOpen &&
					<Modal toggleModal={toggleModal}>
						<div className="modal-header">
							<IconButton toggleModal={toggleModal} aria-label="Go Back">
								<GoBack width={17} height={10}/>
							</IconButton>
						</div>
						<DiaryAddProductForm/>
					</Modal>
				}
			</Container>
		</DairyPageContainer>
	)
}

export default DairyPage;