import posts from '../tuits/tuits.js';
import tuitsDao from '../tuits/tuits-dao.js';
let tuits = posts;

const createTuit = (req,res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    // newTuit.userName = 'React';
    newTuit.postedOn = new Date().getDate();
    newTuit.liked = false;
    newTuit.verified = false;
    newTuit.handle="ReactJS";
    newTuit.postedBy= {
        "username": "ReactJS"
    };
    newTuit["logo-image"]= "../images/react.png";
        newTuit.stats= {
        retuits: 0,
            likes: 0,
            comments: 0
    }
    tuits.push(newTuit);
    res.json(newTuit);
}
const findAllTuits =async (req,res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    updateTuit._id = tuitdIdToUpdate;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits',createTuit);
    app.get('/api/tuits',findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}