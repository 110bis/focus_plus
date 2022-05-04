'use strict'

//////////////////
/* Dependencies */
//////////////////

const dotenv = require('dotenv');
const assert = require('assert');


//////////
/* INIT */
//////////

dotenv.config();

/////////
/* APP */
/////////


const {
    PORT,
    HOST,
    HOST_URL
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');


////////////
/* EXPORT */
////////////

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL
}