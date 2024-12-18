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
        
        .logo {
            display: inline-flex;
            align-items: center;
            
            .logo-title {
                padding-left: 10px;
                font-weight: 100;
                font-size: 18px;
				span:first-of-type {
					color: ${p => p.theme.colors.secondary};
				}
				span:last-of-type {
					color: ${p => p.theme.colors.accent};
					padding-left: 3px;
				}
            }
        }
        
        .icon-box {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
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