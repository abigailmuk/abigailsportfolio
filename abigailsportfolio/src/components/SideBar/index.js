import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="/education" onClick={toggle}>Education</SidebarLink>
                <SidebarLink to="/workexperience" onClick={toggle}>Work Experience</SidebarLink>
                <SidebarLink to="/achievements" onClick={toggle}>Achievements</SidebarLink>
                <SidebarLink to="/hobbies" onClick={toggle}>Hobbies</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contactme" onClick={toggle}>Contact Me</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
    
    </>
  )
}

export default Sidebar