import navItems from "./navItems.js";
import React from "react";
import NavItem from "./NavItem";

const NavItemList = () => {
    return(
        navItems.map(nav => {return <NavItem navItem = {nav} key = {nav.Link}/>})
    );
}
export default NavItemList;