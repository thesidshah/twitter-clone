import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import Todos from "./todos";
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

            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Todos/>
        </>
    )
};
export default Labs;