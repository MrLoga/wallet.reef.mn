import 'dotenv/config';
import express from 'express';
let app = express();

import cors from 'cors';
import http from 'http';
let server = require('http').Server(app);
let expressWs = require('express-ws')(app,server);
// import expressWs from 'express-ws';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// const appWs = expressWs(app);

import indexRouter from './routes/index';
import apiRouter from './routes/api';
import apiWs from './routes/payment';

// import models from './models';
import asyncMiddleware from './utils/asyncMiddleware';


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'front/dist')));
app.use(express.static(path.join(__dirname, 'public')));


const DB_options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: process.env.NODE_ENV !== "production"
};
mongoose.connect(process.env.DB_CONNECTION_STRING, DB_options);
const MConnect = mongoose.connection;
MConnect.on('error', console.error.bind(console, 'connection error:'));  
MConnect.once('open', () =>{ console.log('connected to Mongo') });



// app.use('/', indexRouter);
app.ws('/api/payment', apiWs);
app.use('/api', apiRouter);

// app.get('/clear', asyncMiddleware(async (req, res) => {
// 	const requests = await MConnect.db.dropCollection('requests');
// 	console.log("drop");
// 	return res.send(requests);
// }));



// export default app;
module.exports = {app: app,server: server};;