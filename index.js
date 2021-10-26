'use strict';
const dotenv = require('dotenv').config();
const { startUp } = require('./lib/server');
const { db } = require('./lib/auth/models/index.js');
const PORT = process.env.PORT || 3000;

// Start up DB Server
db.sync().then(() => startUp(PORT));
