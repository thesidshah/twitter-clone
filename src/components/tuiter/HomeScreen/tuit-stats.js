import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="wd-icon-links">
            <a href="/" className="wd-icon-link"><i className='fa fa-comment'/> {tuit.stats.comments}</a>
            <a href="/" className="wd-icon-link"><i className="fa fa-retweet"/> {tuit.stats.retuits}</a>
            <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1"
           style={{color: 'red'}}/>
    }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"/>
                }
                {tuit.stats && tuit.stats.likes}
    </span>
            <a href="/" className="wd-icon-link"><i className="fa fa-upload" aria-hidden="true"/></a>
    </div>
);
}
export default TuitStats;

