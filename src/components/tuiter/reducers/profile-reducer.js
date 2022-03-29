import profileData from "../data/profileData";
const ProfileReducer = (state = profileData, action) => {
    switch (action.type){
    case 'save':
        state.firstName = action.firstName;
        state.bio = action.bio;
        return state;
    default:
        return state;
    }
}
export default ProfileReducer;