import styled from "@emotion/styled";

export const LoginFormContainer = styled.form`
    padding-top: 80px;
    padding-bottom: 60px;
	
	button + button {
		margin-top: 20px;
		
		background-color: #ffffff;
		color: #FC842D;
		
		border: 2px solid #FC842D;
		transition: background-color 250ms ease-in-out;
	}
`;

export const InputBox = styled.div`
    position: relative;
    
    label {
        position: absolute;
        top: -20px;
        left: 0;
        padding: 10px 0;
        
        font-weight: 900;
        font-size: 14px;
        line-height: 1.2;
        letter-spacing: 0.04em;
		
		color: #9B9FAA;
        
        pointer-events: none;
        transition: 0.5s;
		
		&:after {
			content: "*";
			position: absolute;
			top: 10px;
			left: 100%;
			width: 15px;
			height: 15px;
			transform: translateX(25%);
        }
    }
    
    input {
        width: 100%;
        padding: 10px 0;
        margin-bottom: 30px;
        
        font-size: 16px;
        
        color: rgb(0, 0, 0);
        background: transparent;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        outline: none;
        
        &:focus ~ label {
            top: -22px;
            left: 0;
            color: #FC842D;
            font-size: 12px;
        }
    }
`;
