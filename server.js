const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');


// Init express
const app = express();

// body parser middleware
// body-parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Config
const db = require('./config/keys').mongoURL;
//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongodb connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Serve static assets if it is in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));