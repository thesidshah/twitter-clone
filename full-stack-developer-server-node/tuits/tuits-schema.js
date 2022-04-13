import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        tuit : String,
        title: String,
        time: String,
        handle: String,
        'logo-image': String,
        liked: Boolean,
        postedBy : {
            username : String
        },
        stats: {
            likes : Number,
            comments: Number,
            retuits: Number,
        }
    }, {
        collection : 'tuits'
    }
);
export default schema;
// import mongoose from 'mongoose';
// const schema = mongoose.Schema({
//     tuit: String,
//     likes: Number,
//     postedBy: {
//         username: String
//     }
// }, {collection: 'tuits'});
// export default schema;