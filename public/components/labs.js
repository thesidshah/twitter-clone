// const labs = () => {
//     return (
//         // <div className="container">
//             <h1>Labs</h1>
//         /*</div>*/
//     );
// }
// export default labs;
import React from "react";
import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;
