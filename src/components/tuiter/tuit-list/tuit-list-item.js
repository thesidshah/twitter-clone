import React from 'react';
import {useDispatch} from "react-redux";
import TuitStats from "../HomeScreen/tuit-stats";

const videoCheck = ({tuit = {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
        "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
        "video": "unKvMC3Y1kI"
    },
    "logo-image": "../../../images/react-blue.png",
    "avatar-image": "../../../images/react-blue.png",
    "stats": {
        "comments": 123,
        "retuits": 234,
        "likes": 345
    }
}}) => {
    if('attachments' in tuit) {
        if('video' in tuit.attachments) {
            return (
                <iframe src={"https://www.youtube.com/embed/" + tuit.attachments.video} className= "wd-video"
                        title="YouTube video player" frameBorder="0" width="100%"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            );
        }
        else if('image' in tuit["attachments"]) {
            return(
                <div className="wd-head-image">
                    <img src= {tuit.attachments.image} className="wd-topic-heading-image" alt = "Post image"/>
                </div>
            );
        }
    }
}
const TuitListItem = ({tuit = {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
        "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
        "video": "unKvMC3Y1kI"
    },
    "logo-image": "../../../images/react-blue.png",
    "avatar-image": "../../../images/react-blue.png",
    "stats": {
        "comments": 123,
        "retuits": 234,
        "likes": 345
    }
}}) => {

    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'delete-tuit',
            tuit: tuit
        });
    }
    return(
        <li className = "list-group-item">

            <img src={tuit["logo-image"]} className = "wd-display-img" alt = "Profile"/>
            <a href = "/" className = "wd-topic-heading">{tuit.postedBy.username}</a>
            {tuit.verified ? <i className="fa fa-check-circle"/> : <></>}
            <a href = "/" className = "wd-follow-handle">@{tuit.handle + " "}</a>
            <span className="wd-topic-time">{tuit.time}</span>
            {/*<div className = "pull-right float-end">*/}
            {/*<a className = "wd-delete-tuit" onClickCapture={tuitClickHandler}  ><i className="fa-solid fa-x"/></a>*/}
            {/*</div><br/>*/}
            <i onClick={() =>
    tuitClickHandler(tuit)}
    className="fas fa-remove
                  fa-pull-right"/>
            {/*<span className="wd-topic-topicname">{tuit.title}</span><br/>*/}
            <span className="wd-topic-description">{tuit.tuit}</span><br/>
            {videoCheck({tuit})}
            <TuitStats tuit = {tuit}/>
            {/*<img src="${tuit.image}" className="wd-display-img" alt = "tuit image"/>*/}
            {/*<a href="#" className="wd-topic-heading">${post.author}  </a><i className="fa fa-check-circle"/><a*/}
            {/*href="#" className="wd-follow-handle">@${post.handle}</a>*/}
            {/*<span className="wd-topic-time"> - ${post.time}</span><br>*/}
            {/*<span className="wd-topic-description">${post.tweet}</span><br>*/}
            {/*<div className="wd-head-image">*/}
            {/*    <img src="${post.postImage}" className="wd-topic-heading-image">*/}
            {/*        <span className="wd-topic-description">${post.caption}</span><br>*/}
            {/*        <span className="wd-topic-topicname">${post.text}</span>*/}
            {/*        <div className="wd-icon-links">*/}
            {/*            <a href="#" className="wd-icon-link"><i className='fa fa-comment'/> 22</a>*/}
            {/*            <a href="#" className="wd-icon-link"><i className="fa fa-retweet"/> 34</a>*/}
            {/*            <a href="#" className="wd-icon-link-heart">    &#10084;  2</a>*/}
            {/*            <a href="#" className="wd-icon-link"><i className="fa fa-upload" aria-hidden="true"/></a>*/}
            {/*        </div>*/}
            </li>
    );
}
export default TuitListItem;