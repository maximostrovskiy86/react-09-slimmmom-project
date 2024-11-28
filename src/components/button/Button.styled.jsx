import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    max-width: 176px;
    padding: 13px 40px;
    //margin: 0 auto;
    //margin-top: 60px;
    
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    text-align: center;
    letter-spacing: 0.04em;
    
    background-color: #fc842d;
    color: #ffffff;
    border: 2px solid #fc842d;
    border-radius: 30px;
    outline: none;
	
    cursor: pointer;
    transition: box-shadow 250ms ease-in, background-color 250ms ease-in-out,
    color 250ms $timing-function;
    
    &:hover {
        background-color: #fc842d;
        color: #ffffff;
        box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    }
`;


