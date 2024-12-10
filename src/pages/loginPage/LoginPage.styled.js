import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
	padding-top: ${p => p.theme.space[7]};
	
	h1 {
        padding: ${p => p.theme.space[0]};
		
        text-align: center;
		
        color: ${p => p.theme.colors.accent};
	}
`;