import React, {useState} from 'react';
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import "./editprofile.css";
const EditProfile = () => {
    const profileData = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const editProfileChange = ({profileData}) => {
        console.log("Inside edit profile change");
        console.log(profileData);
        const action = {
            type: "edit-profile",
            profileData
        }
        dispatch(action);
    }
    const [firstName, setFirstName] = useState(profileData.firstName);
    const [lastName, setLastName] = useState( profileData.lastName);
    return(
        <div className = "">
            <img src = {profileData.bannerPicture} className = "wd-profile-banner" alt="Profile Banner"/>
            <div className = "wd-profile-details">
                <img src = {profileData.profilePicture} className = "wd-profile-logo" alt="profile image"/>
                <button onClick={() => editProfileChange(profileData)} className = "wd-profile-edit-button fa-pull-right btn btn-outline-dark">save</button><br/>
                <input type = "text" className = "wd-edit-field h5" defaultValue={firstName+ " " }/><br/>
                <input type = "text" className = "wd-edit-field h5" defaultValue={lastName + " " }/><br/>
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
export default EditProfile;