import React, { useState, useEffect } from 'react'
//import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav );
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
    <>
    <IconContext.Provider value={{ color: '#fff' }} >
        <Nav scrollNav={ scrollNav }>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}><h1>Abigail Mukombero</h1></NavLogo>
                <MobileIcon onClick={toggle}> 
                 
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/about' smooth="true" duration={500} spy="true" exact='true' offset={-80} >About</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/education'>Education</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/workexperience'>Work Experience</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/achievements'>Achievements</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/hobbies' smooth="true" duration={500} spy="true" exact='true' offset={-80} >Hobbies</NavLinks> 
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contactme">Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar