/* eslint-env jquery */
// import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";
import NavigationSideBar from "../NavigationSideBar";
import React from "react";

const ExploreScreen = () => {
    return (
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-2 col-xl-2 ">
                <NavigationSideBar activeItem = "Explore"/>
            </div>
            <ExploreComponent/>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    )
}
export default ExploreScreen;
// <div className="row mt-2">
//     <div className="col-2 col-md-2 col-lg-2 col-xl-2 ">
//         <NavigationSideBar activeItem = "Home"/>
//     </div>
//     <ExploreComponent/>
//     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//         <WhoToFollowList/>
//     </div>
// </div>