const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');

const app = express();

// app-use explanation
// Each layer is essentially adding a function that specifically handles something to your flow through the middleware.
// E.g. by adding bodyParser, you're ensuring your server handles incoming requests through the express middleware.
// So, now parsing the body of incoming requests is part of the procedure
// that your middleware takes when handling incoming requests 
// -- all because you called app.use(bodyParser).

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/user', userRoutes);



// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})