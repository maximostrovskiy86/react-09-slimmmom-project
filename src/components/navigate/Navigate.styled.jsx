import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom';



export const HeaderStyle = styled.div`
    position: relative;
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
			background-color: transparent;
			outline: none;
			border: none;
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

export const Menu = styled.menu`
    .menu-box {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        min-height: 100vh;
        padding-top: ${p => p.theme.space[7]}px;
        background-color: #264061;
        
        z-index: 3;
        
        li {
            text-align: center;
            
            a {
                display: inline-block;
                padding-top: 5px;
                padding-bottom: 5px;
                
                font-size: 18px;
                font-weight: ${props => props.theme.fontWeights.bold};
                text-transform: uppercase;
                color: ${props => props.theme.colors.text};
                
                transition: background-color 0.25ms cubic-bezier(0.4, 0, 0.2, 1);
				&:focus {
					color: ${p => p.theme.colors.primary};
				}
            }
        }
        
        li + li {
            margin-top: ${p => p.theme.space[4]}px;
        }
    }
}
`;