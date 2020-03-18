const express = require('express');
const server = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const ConnectToDb = require('./database');
const sessionRouter = require('./router');
const PORT = process.env.SERVER_PORT;   
const cors = require('cors')
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: true }))
server.use(bodyParser.json());
ConnectToDb();
sessionRouter.sessionRouter(server);
server.listen(PORT, () => {
    console.log("Server started on port ",PORT);
});

