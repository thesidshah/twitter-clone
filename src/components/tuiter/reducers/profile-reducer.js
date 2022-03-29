import profileData from "../data/profileData";
const ProfileReducer = (state = profileData, action) => {
    switch (action.type){
    case 'save':
        state.name = action.name;
        state.bio = action.bio;
        return state;
    default:
        return state;
    }
}
export default ProfileReducer;