const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors({
    origin:"http://localhost:3000"
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, function(err) {
    if (err) {
        console.log(err)
    }else{
        console.log('Connected');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log((`Server has started on Port: ${PORT}`))});