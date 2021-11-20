const express = require('express');
const mongoose = require('mongoose');
const config = require("config");
const path = require('path');


// Init express
const app = express();

// parse application/json
app.use(express.json());

// Config
const db = config.get('mongoURI');
//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongodb connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if it is in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));