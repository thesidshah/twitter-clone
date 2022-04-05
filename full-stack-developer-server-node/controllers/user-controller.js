import people from "./users/user.js";
let users = people;

const userController = (app) => {
    app.get('/api/users',findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users',createUser);
    app.delete('/api/users/:uid',deleteUser);
    app.put('/api/users/:uid',updateUser);
    }

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser); //Adding it to the state of server. Does this add to the actual JSON file? I am sure it does.
    res.json(newUser); //Adding it to the response JSON.
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    updatedUser._id = userId;
    users = users.map(
        user => user._id === userId? updatedUser : user);
    // res.send(users);
    res.sendStatus(200);
}
// const updateUser = (req, res) => {
//     const userId = req.params['uid'];
//     const updatedUser = req.body;
//     users = users.map(usr =>
//         usr._id === userId ?
//             updatedUser :
//             usr);
//     res.sendStatus(200);
// }

const deleteUser = (req,res) => {
    const userId = req.params['uid'];
    users = users.filter(user => user._id !== userId);
    res.sendStatus(200);
}

const findUsersByType = (type) => {
    return users.filter(u => u.type === type);

}
const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findAllUsers = (req, res) => {

    const type = req.query.type;
    console.log(type);
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

export default userController;