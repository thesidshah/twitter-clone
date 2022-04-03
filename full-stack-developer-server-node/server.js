// const express = require('express'); -> non es6
import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";

const app = express();
helloController(app);
userController(app);
app.listen(4000);