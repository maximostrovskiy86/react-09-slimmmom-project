import styled from "@emotion/styled";


export const MainPageContainer = styled.main`
    position: relative;
	padding-bottom: ${p => p.theme.space[7]}px;
    
    .inner-head-panel {
        height: 40px;
        background-color: ${p => p.theme.colors.gray};
    }
`;