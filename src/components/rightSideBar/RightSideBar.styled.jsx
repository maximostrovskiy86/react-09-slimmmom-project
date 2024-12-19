import styled from "@emotion/styled";


export const RightSideBarContainer = styled.aside`
    background-color: ${p => p.theme.colors.background};
	padding-top: ${p => p.theme.space[6]}px;
	padding-bottom: ${p => p.theme.space[6]}px;
	
	h3 {
		font-weight: ${p => p.theme.fontWeights.bold};
	}
	
	h3:last-of-type {
		margin-top: ${p => p.theme.space[5]}px;
	}
`;

export const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
    margin-top: ${p => p.theme.space[4]}px;
    
    
    font-weight: ${p => p.theme.fontWeights.normal};
	color: ${p => p.theme.colors.primary};
`;

