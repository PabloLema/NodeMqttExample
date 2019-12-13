/* jshint esversion: 8 */
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let sensor2Schema = new Schema({
    data: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sensor2', sensor2Schema);