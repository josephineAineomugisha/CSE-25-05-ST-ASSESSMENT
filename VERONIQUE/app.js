const express = require('express');
const port = 3001;
const app = express();
const mongoose = require('mongoose')


app.listen(port, console.log(`server running on ${port}`) )

module.exports = app;