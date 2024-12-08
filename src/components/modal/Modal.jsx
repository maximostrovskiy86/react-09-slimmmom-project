import React, {useEffect} from 'react';
import {ModalContainer} from "./Modal.styled";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({toggleModal, children}) => {
	
	useEffect(() => {
		window.addEventListener("keydown", onCLoseModal);
		const body = document.querySelector("body");
		body.style.overflow = "hidden";
		
		return () => {
			window.removeEventListener("keydown", onCLoseModal);
			const body = document.querySelector("body");
			body.style.overflow = "auto";
		};
	});
	
	const onCLoseModal = (e) => {
		if (e.code === 'Escape') {
			toggleModal();
		}
	}
	
	// const onOverlayClose = (e) => {
	// 	if (e.currentTarget === e.target) {
	// 		toggleModal();
	// 	}
	// }
	
	return createPortal(
		<ModalContainer className='modal'>
			{children}
		</ModalContainer>,
		modalRoot
	)
}

export default Modal;