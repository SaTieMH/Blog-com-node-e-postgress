const express = require('express'); //instanciar express
const app = express();

app.use('/', require('./route/postsRoute'));

app.listen(8081);