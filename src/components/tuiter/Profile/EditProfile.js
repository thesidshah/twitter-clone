import React, {useState} from 'react';
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import "./editprofile.css";
import profileReducer from "../reducers/profile-reducer";
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";
const EditProfile = () => {
    let profileData = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const editProfileChange = ({profileData}) => {
        console.log("Inside edit profile change");
        const action =  {
            type: "save",
            name: name,
            bio: profileBio
        };
        dispatch(action);
    }
    const [name, setName] = useState(profileData.name);
    const [profileBio, setProfileBio] = useState(profileData.bio);
    return(
        <div className = "">
            <img src = {profileData.bannerPicture} className = "wd-profile-banner" alt="Profile Banner"/>
            <div className = "wd-profile-details">
                <img src = {profileData.profilePicture} className = "wd-profile-logo" alt="profile image"/>
                <Link to="/tuiter/profile"  className = "wd-profile-edit-button fa-pull-right btn btn-outline-dark"><span onClick={() => editProfileChange(profileData)}>save</span></Link><br/>
                <label className = "h5 pe-4" htmlFor="profilename">Name:</label>
                <input type = "text" id = "profilename" onChange={(event) => {setName(event.target.value)}} className = "wd-edit-field h5" defaultValue={name+ " " }/><br/>
                <label className = "h5 pe-4" htmlFor="profileBio">Bio :</label>
                <textarea  rows = "4" id = "profileBio"  onChange={(event) => {setProfileBio(event.target.value)}} className = "wd-edit-field h5" defaultValue={profileBio }/><br/>
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