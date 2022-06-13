import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar