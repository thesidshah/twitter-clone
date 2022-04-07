import axios from 'axios';
/*
* Let's first implement findAllTuits, the easiest of the services that retrieves all the tuits from the server.
* The findAllTuits function sends an HTTP GET request to the TUITS_API using the axios.get() function.
* The request is asynchronous as evidenced by the async and await keywords and the response will be set when
*  the request resolves from the server. The data in the response is the
*  tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
* */
// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://full-stack-sid.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}
export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}
export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}