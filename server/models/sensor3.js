/* jshint esversion: 8 */
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let sensor3Schema = new Schema({
    data: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sensor3', sensor3Schema);