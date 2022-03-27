import React from 'react';

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon:"../images/java.jpg",
                                 userName:"thesidshah",
                                 handle : "thesidshah"}
                             })=> {
    return(
        <>
            <li className="list-group-item list-group-items wd-follow-box wd-bg-gray">
                <img src={who.avatarIcon} className="wd-tuit-image-follow" alt="Icon"/>
                    <span className = "wd-tuit-title">{who.userName}</span>
                    <i className="fa fa-check-circle"/><br/>
				    <a href="#" className="wd-follow-handle wd-tuit-topic">@{who.handle}</a>
                    <button className="btn btn-primary btn-sm followBtn" type="button">Follow</button>
            </li>
        </>
    );
}
export default WhoToFollowListItem;