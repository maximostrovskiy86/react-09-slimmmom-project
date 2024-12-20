import styled from "@emotion/styled";

export const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    top: 82px;
    right: 0;
    
    //max-width: calc(100vw - 48px);
    //max-height: calc(100vh - 82px);
    
    padding-left: 15px;
    padding-right: 15px;
    
    background-color: #ffffff;
    //background-color: #cccccc;
    //opacity: 0;
    //visibility: hidden;
    
    .modal-header {
        padding: 15px 0;
		margin: 0 -15px;
        background-color: ${p => p.theme.colors.background};
		
        button {
            margin-left: 15px;
        }
    }
	

`;