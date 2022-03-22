import React from 'react';
import {Link} from "react-router-dom";
import '../../explore.css'
import '../../explorer.css'
import '../../home.css'
import '../../vendors/bootstrap/bootstrap.min.css'
import '../../vendors/bootstrap/css/bootstrap.css'
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";


const Tuiter = ({activeItem = "Explore"}) => {
    if(activeItem === "Explore") {
        return (
            <>
                <h1>Tuiter</h1>
                <Link to="/hello-world">
                    Hello
                </Link> |
                <Link to="/">
                    Labs
                </Link>
                <ExploreScreen/>
            </>
        )
    }
    else {
        return (
            <>
                <h1>Tuiter</h1>
                <Link to="/hello-world">
                    Hello
                </Link> |
                <Link to="/">
                    Labs
                </Link>
                <HomeScreen/>
            </>
        )
    }
};
export default Tuiter;