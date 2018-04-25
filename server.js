const mongoose = require('mongoose');
const express = require('express');
const server = express();
const port = 5550;

mongoose.connect('mongodb://localhost/someserver');

module.export = server;
