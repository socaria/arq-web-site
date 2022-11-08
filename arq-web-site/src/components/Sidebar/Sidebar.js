import React from "react";
import { Icon, CloseIcon, SidebarContainer, SidebarRoute, SideBtnWrap, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='home'>
                        Home
                    </SidebarLink>
                    <SidebarLink to='singup'>
                        Sing Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin'>Sing In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;