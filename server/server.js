const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');


const credentials = require('./middleware/credentials');

const app = express();

app.use(cors({
    origin:"http://localhost:3000"
}));


// Middleware

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

//middleware for cookies
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(routes);

app.use('/refresh', require('./routes/refresh.routes'));


mongoose.connect(process.env.DB_CONNECTION, function(err) {
    if (err) {
        console.log(err)
    }else{
        console.log('Connected');
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {console.log((`Server has started on Port: ${PORT}`))});