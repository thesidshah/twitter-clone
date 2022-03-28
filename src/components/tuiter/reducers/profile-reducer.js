import profileData from "../data/profileData";
const ProfileReducer = (state = profileData, action) => {
    switch (action.type){
    case 'save':
        return action.profileData;
    default:
        return state;
    }
}
export default ProfileReducer;