import React from 'react';
// import ProfileData from "../data/profileData";
import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
// import { createStore} from "redux";

// const store = createStore(ProfileReducer);
const Profile = () => {
    const profileData = useSelector(state => state.profileData);
    const dispatch = useDispatch();
    const editProfileChange = ({profileData}) => {
        const action = {
            type: "edit-profile",
            profileData
        }
        dispatch(action);
    }
    return(
        <div className = "">
            <img src = "../images/starship.jpg" className = "wd-profile-banner" alt="Profile Banner"/>
            <img src = "../images/elon.jpg" className = "wd-profile-logo" alt="profile image"/>
            {console.log(profileData.profileData)}
            {profileData.firstName}
            {profileData.lastName}
            <button onClick={() => editProfileChange({profileData})}>Edit Profile</button>  
        </div>
    );
};
export default Profile;