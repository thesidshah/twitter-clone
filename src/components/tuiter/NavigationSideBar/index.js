import React from 'react';
import {Link} from "react-router-dom";
import NavSideBarItem from "./NavSideBarItem";
import NavSideBarItems from "./NavSideBarItems";
import navItems from "../NavBar/navItems";
import NavItem from "../NavBar/NavItem";
// import HomeScreen from "../HomeScreen/HomeScreen";

const NavigationSidebar = ({activeItem = 'Explore'}) => {
    // if(activeItem === "Home") {
    //     return (
    //             <nav className="wd-first-column">
    //             <div className="list-group flex-column">
    //                 <div className = "nav-item">
    //                     <Link className="list-group-item nav-link wd-borderless" to="/tuiter">
    //                         <i className="fab fa-2x fa-twitter"/></Link>
    //                 </div>
    //
    //                 <div className = "nav-item">
    //                     <Link className="list-group-item active wd-borderless" to="/tuiter/home"  >
    //                         <i className="fas fa-home wd-padded-right"/><span className = "wd-text">Home </span>
    //                     </Link>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <Link className="list-group-item wd-borderless" to="/tuiter/explore ">
    //                         <i className="fa-solid fa-hashtag wd-padded-right"/><span className = "wd-text">Explore </span>
    //                     </Link>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-bell  wd-padded-right"/><span className = "wd-text">Notifications </span>
    //                     </a>
    //                 </div>
    //                 <div className="nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-envelope wd-padded-right"/><span className = "wd-text">Messages </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-bookmark wd-padded-right"/><span className = "wd-text">Bookmarks </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-list wd-padded-right"/><span className = "wd-text">Lists </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className ="list-group-item wd-borderless" href="/">
    //                         <i className ="fa-solid fa-user wd-padded-right"/><span className = "wd-text">Profile </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item wd-borderless">
    //                     <a className ="list-group-item wd-borderless" href="/">
    //                         <i className ="fa-solid fa-circle wd-padded-right"/><span className = "wd-text">More   </span>
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className ="d-grid mt-2">
    //                 <a href="tweet.html"
    //                    className = "btn btn-primary btn-block rounded-pill">
    //                     Tweet</a>
    //             </div>
    //             </nav>
    //     );
    // }
    // else if(activeItem === "Explore") {
    //     return (
    //             <nav className="wd-first-column">
    //             <div className="list-group flex-column">
    //                 <div className = "nav-item">
    //                     <Link className="list-group-item nav-link wd-borderless" to="/tuiter/home">
    //                         <i className="fab fa-2x fa-twitter"/></Link>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <Link to="/tuiter/home" className="list-group-item wd-borderless" >
    //                         <i className="fas fa-home wd-padded-right"/><span className = "wd-text">Home </span>
    //                     </Link>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <Link className="list-group-item active wd-borderless" to="/tuiter/explore">
    //                         <i className="fa-solid fa-hashtag wd-padded-right"/><span className = "wd-text">Explore </span>
    //                     </Link>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-bell  wd-padded-right"/><span className = "wd-text">Notifications </span>
    //                     </a>
    //                 </div>
    //                 <div className="nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-envelope wd-padded-right"/><span className = "wd-text">Messages </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-bookmark wd-padded-right"/><span className = "wd-text">Bookmarks </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-list wd-padded-right"/><span className = "wd-text">Lists </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-user wd-padded-right"/><span className = "wd-text">Profile </span>
    //                     </a>
    //                 </div>
    //                 <div className = "nav-item wd-borderless">
    //                     <a className="list-group-item wd-borderless" href="/">
    //                         <i className="fa-solid fa-circle wd-padded-right"/><span className = "wd-text">More   </span>
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className="d-grid mt-2">
    //                 <a href="/public/tuiter/tuit.html"
    //                    className="btn btn-primary btn-block rounded-pill">
    //                     Tweet</a>
    //             </div>
    //             </nav>
    //     );
    // }
    const linkArray = (window.location.pathname).split("/");
    const active = (linkArray[linkArray.length-1]);
    return(
        <nav className="wd-first-column">

        {/*NavSideBarItems.map(navSide => {<NavSideBarItem NavItem={navSide}/>})*/}
            {NavSideBarItems.map(navSide => {return <NavSideBarItem NavItem = {navSide} active={active} key = {navSide.to}/>})}
            <div className="d-grid mt-2">
                <a href="/public/tuiter/tuit.html"
            className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
            </div>
        </nav>
    );
};
export default NavigationSidebar;
