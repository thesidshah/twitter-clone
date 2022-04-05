// const express = require('express'); -> non es6
import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(express.json());
/*
Out of the box express does not know
how to extract data from an HTTP body.
Express defines a JSON middleware to parse data from the body that can be registered as a middleware.
All requests will first go through this middleware
parsing HTTP body into a JSON object added to the
request object in a new body property that later HTTP handlers can access.
*/
helloController(app);
userController(app);
tuitsController(app);
app.listen(4000);