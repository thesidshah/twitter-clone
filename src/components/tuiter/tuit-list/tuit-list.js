import React, {useEffect} from "react";
// import tuits from "../data/tuits.json";
import {useDispatch,useSelector} from "react-redux";
import TuitListItem
    from "./tuit-list-item";
// import * as service from "../../../services/tuits-service";
import {findAllTuits} from "../actions/tuits-actions";
// import * as service from "../services/tuits-service";
// import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();

    // const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), []);

    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;
