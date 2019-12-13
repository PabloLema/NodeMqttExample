/* jshint esversion: 8 */
require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/index.routes'));

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log('DB Connected');
    }
});

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
});
