import people from "./users/user.js";
let users = people;

const userController = (app) => {
    app.get('/api/users',findAllUsers);
}

const findUsersByType = (type) => {
    return users.filter(u => u.type === type);

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