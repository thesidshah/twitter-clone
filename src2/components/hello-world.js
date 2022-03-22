// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
// import React from "react";
// function HelloWorld() {
//     return (
//         <h1>Hello World!</h1>
//     );
// }

// export default HelloWorld;
import React from "react";
// import labs from "Labs";
// import tuiter from "Tuiter";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="components/Labs">
                Labs
            </Link> |
            <Link to="components/Tuiter">
                Tuiter
            </Link>
        </>
    )
};

export default HelloWorld;

