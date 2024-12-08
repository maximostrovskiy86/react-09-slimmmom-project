import styled from "@emotion/styled";

export const CalculatorFormContainer= styled.form`
    color: #9B9FAA;
`
export const CalculateGroupContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
`;

export const InputBox = styled.div`
    position: relative;
    
    label {
        position: absolute;
        top: -20px;
        left: 0;
        padding: 10px 0;
        
        font-weight: 700;
        font-size: 14px;
        line-height: 1.2;
        letter-spacing: 0.04em;
        
        pointer-events: none;
        transition: 0.5s;
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

export const FormRadioGroup = styled.fieldset`
    display: flex;
    margin-bottom: 35px;
    border: none;
    
    .form-radio-group-title {
        margin-bottom: 10px;
    }
	
    .radio-form-field {
		position: relative;
		
        input {
            width: 15px;
            height: 15px;
            transition: color 250ms ease-in-out;
            &:checked + .form-label {
                font-weight: 700;
                color: #FC842D;
            }
            
            &:checked + .form-label:before {
                filter: grayscale(0%);
                background: url(https://snipp.ru/img/radio-2.png) 0 0 no-repeat;
			}
        }
	}
    
    .radio-form-field + .radio-form-field {
        margin-left: 25px;
    }
    
    .form-label {
		&:before {
            content: "";
            display: inline-block;
            width: 17px;
            height: 17px;
            position: absolute;
			top: 2px;
            left: 4px;
            filter: grayscale(100%);
            background: url(https://snipp.ru/img/radio-1.png) 0 0 no-repeat;
            cursor: pointer;
        }
	}
`;