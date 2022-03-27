import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                handle:"ReactJS",
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },
                "logo-image": "../images/react.png",
                stats: {
                    retuits: 111,
                    likes: 222,
                    comments: 333
                }
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits
    }
}

export default tuitsReducer;