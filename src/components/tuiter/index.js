// import React from 'react';
// import {Link} from "react-router-dom";
// import '../../explore.css'
// import '../../explorer.css'
// import '../../home.css'
// import '../../vendors/bootstrap/bootstrap.min.css'
// import '../../vendors/bootstrap/css/bootstrap.css'
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";


// const Tuiter = ({activeItem = "Explore"}) => {
//     if(activeItem === "Explore") {
//         return (
//             <>
//                 <h1>Tuiter</h1>
//                 <Link to="/hello-world">
//                     Hello
//                 </Link> |
//                 <Link to="/">
//                     Labs
//                 </Link>
//                 <ExploreScreen/>
//             </>
//         )
//     }
//     else {
//         return (
//             <>
//                 <h1>Tuiter</h1>
//                 <Link to="/hello-world">
//                     Hello
//                 </Link> |
//                 <Link to="/">
//                     Labs
//                 </Link>
//                 <HomeScreen/>
//             </>
//         )
//     }
// };
// export default Tuiter;
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSideBar";
import "../../explore.css";
import "../../explorer.css";
import "../../home.css"
import "../../vendors/bootstrap/css/bootstrap.css"

const Tuiter = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <h2>Who to follow</h2>
            </div>
        </div>
    );
};
export default Tuiter;