const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileRoute = require('./routes/file');
const userRoute = require('./routes/user');
require('./db/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileRoute);
app.use(userRoute);

app.listen(port, () => {
    console.log(`server is started on port: ${port}`);
});