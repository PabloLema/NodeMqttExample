/* jshint esversion: 8 */
const express = require('express');
const mqtt = require('mqtt');
const app = express();

const Sensor = require('../models/sensor');
const Sensor2 = require('../models/sensor2');
const Sensor3 = require('../models/sensor3');

const cors = require('cors');
app.use(cors({ origin: '*' }));

global.client  = mqtt.connect('mqtt://178.62.34.214');

global.client.on('connect', () => {
    global.client.subscribe('sensor1', (err) => {
        console.log('sensor 1 suscribe');
    });
    global.client.subscribe('sensor2', (err) => {
        console.log('sensor 1 suscribe');
    });
    global.client.subscribe('sensor3', (err) => {
        console.log('sensor 1 suscribe');
    });
});

global.client.on('message', (topic, message) => {
    console.log(topic);
    console.log(message.toString());

    switch (topic) {
        case 'sensor1':
            let sensor = new Sensor({
                data: message.toString()
            });

            sensor.save((err, sensorDB) => {
                if (err) {
                    console.log('error');
                }
                console.log('data saved', sensorDB);
            });
            break;
    
        case 'sensor2':
            let sensor2 = new Sensor2({
                data: message.toString()
            });

            sensor2.save((err, sensorDB) => {
                if (err) {
                    console.log('error');
                }
                console.log('data saved', sensorDB);
            });
            break;

        case 'sensor3':
            let sensor3 = new Sensor3({
                data: message.toString()
            });

            sensor3.save((err, sensorDB) => {
                if (err) {
                    console.log('error');
                }
                console.log('data saved', sensorDB);
            });
            break;
    
        default:
            break;
    }
    // let sensor = new Sensor({
    //     data: message.toString()
    // });

    // sensor.save((err, sensorDB) => {
    //     if (err) {
    //         console.log('error');
    //     }
    //     console.log('data saved', sensorDB);
    // });
});

module.exports = app;