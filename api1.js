const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Twilio = require('twilio');
const { appendFile } = require('fs');

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extedned:true}));