const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');

const app = express();


//init middleware
//app.use(logger);

//init Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//set a static directory... so we can use files in there
//app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api', require('./routes/members'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is started at ${PORT}`));