import React from "react";
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavItem, MobileIcon, NavLinks, NavMenu } from './NavBarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>dolla</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;