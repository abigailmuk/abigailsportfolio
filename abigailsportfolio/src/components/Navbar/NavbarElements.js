import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
//import { Link as LinkScroll } from 'react-scroll'
import Bars from '../../images/bars.svg'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#0D0C1D' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky; 
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 90px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0px 24px; 
    max-width: 1100px;
`;
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start:
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-wieght: 24;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
`;

export const MobileIcon = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block; 
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute; 
        top: 0;
        right: 0;
        transform: translate(-60%, 35%);
    }
`;


// export const MobileIcon = styled.div`
//     display: none;

//     @media screen and (max-width: 768px) {
//         display: block; 
//         position: absolute; 
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 60%);
//         font-size: 1.8rem; 
//         cursor: pointer; 
//         color: #fff;
//     }
// `;



export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none; 
    }
`;
export const NavItem = styled.li`
    height: 80px;
    font-family: 'Roboto', sans-serif;

    &.active {
        color: #B8860B;
    }
`;

export const NavLinks = styled(LinkRouter)`
    color: #fff; 
    display: flex;
    align-items: center;
    text-decoration: none; 
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        transform: scale(1.02);
        padding: 20px;
        background-color: #B8860B;
    }
    
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #B8860B;
    whte-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
//fc8404ea#9c6615
    &:hover  {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;