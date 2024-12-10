import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom';



export const HeaderStyle = styled.header`
    padding-top: 18px;
    padding-bottom: 18px;
	border-bottom: 2px solid #E0E0E0;
	
	.container {
        display: flex;
        justify-content: space-between;
        align-items: center;
		width: 100%;
	}
`

export const NavigateMenuStyle = styled.nav`
    ul {
        display: flex;
        
        li a {
            text-transform: uppercase;
        }
        
        li + li {
            margin-left: 25px;
        }
    }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9B9FAA;

  &.active {
    color: #212121;
  }
`;