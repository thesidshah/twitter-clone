import React from 'react';
import {Link, useLocation} from "react-router-dom";
import NavSideBarItem from "./NavSideBarItem";
import NavSideBarItems from "./NavSideBarItems";

const NavigationSidebar = ({activeItem = 'Explore'}) => {s

    const linkArray = (window.location.pathname).split("/");
    let active = (linkArray[linkArray.length-1]);
    const loc = useLocation();
    if(active === 'tuiter') {
        active = 'home';
    }
    return(
        <nav className="wd-first-column">
        {/*NavSideBarItems.map(navSide => {<NavSideBarItem NavItem={navSide}/>})*/}
            {NavSideBarItems.map(navSide => {
                return <NavSideBarItem NavItem = {navSide} active={active} key = {navSide.to}/>})
            }
            <div className="d-grid mt-2">
                <a href="/public/tuiter/tuit.html"
            className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
            </div>
        </nav>
    );
};
export default NavigationSidebar;