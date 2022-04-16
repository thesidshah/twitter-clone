import tuitsModel from './tuits-model.js';
export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => {
    console.log("Before calling tuitsModel",tid,tuit);
    tuitsModel.updateOne({_id: tid}, {$set: tuit});
}

export default {findAllTuits, createTuit, deleteTuit, updateTuit}