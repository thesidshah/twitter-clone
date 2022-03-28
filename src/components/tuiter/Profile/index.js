import React from 'react';
// import ProfileData from "../data/profileData";
import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import EditProfile from "./EditProfile";
// import { createStore} from "redux";

// const store = createStore(ProfileReducer);
const Profile = () => {
    const profileData = useSelector(state => state.profile);
    const dispatch = useDispatch();

    // console.log("Inside Profile");
    // console.log(profileData.profilePicture + " is the data retrieved for Profile Data");
    return(
        <div className = "">
            <img src = {profileData.bannerPicture} className = "wd-profile-banner" alt="Profile Banner"/>
            <div className = "wd-profile-details">
            <img src = {profileData.profilePicture} className = "wd-profile-logo" alt="profile image"/>
            <form action = "/tuiter/editprofile"><button  className = "wd-profile-edit-button fa-pull-right btn btn-outline-dark">Edit Profile</button>
            </form><br/>
            <span className = "wd-profile-name h5">{profileData.firstName} {profileData.lastName}<br/></span>
            <span className = "wd-profile-handle pr-2">@{profileData.handle}</span>
            <span className = "wd-profile-handle px-2"><i className="fa-solid fa-location-dot"/>{" " + profileData.location}</span>
            <span className = "wd-profile-handle px-2"><i className="fa-solid fa-cake-candles"/>{" Born " + profileData.dateOfBirth}</span>
            <span className = "wd-profile-handle px-2"><i className="fa-solid fa-calendar"/>{" Joined " + profileData.dateJoined}</span><br/>
                <span className = "wd-profile-name">{profileData.followingCount + " "}</span>following
                <span className = "wd-profile-name px-2">{profileData.followersCount}</span>followers
            <div className = "wd-profile-bio">{profileData.bio}</div>
            </div>
        </div>
    );
};
export default Profile;