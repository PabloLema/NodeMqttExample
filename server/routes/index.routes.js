/* jshint esversion: 8 */
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ origin: '*' }));

app.use(require('./sensor.routes'));

module.exports = app;