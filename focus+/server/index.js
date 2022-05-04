'use strict'

//////////////////
/* Dependencies */
//////////////////

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require ('./config');

///////////////////
/* import routes */
///////////////////

////////////////////////
/* import controllers */
////////////////////////

/////////
/* APP */
/////////

/* set server */
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

/* START SERVER */
app.listen(config.port, () => console.log("Focus+ server is listening on " + config.url));