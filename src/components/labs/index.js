import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import Todos from "./todos";
import ReduxExamples from "./redux-examples";

// const Labs = () => {
//     return(
//         <>
//             <h1>Labs</h1>
//             <Link to="/hello-world">
//                 Hello
//             </Link> |
//             <Link to="/tuiter">
//                 Tuiter
//             </Link>
//
//             <ConditionalOutput/>
//             <Styles/>
//             <Classes/>
//             <Todos/>
//         </>
//     )

// For assignment 7

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello-world">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <ReduxExamples/>
        </>
    )
};
export default Labs;