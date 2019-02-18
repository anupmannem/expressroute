const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
// if index.js no need to be specific, express will pick it
const route = require('./routes/index');

const app = express();

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// when request for /user fetch from ./routes/user/index '/user' route
app.use('/user', route.userRoute);
// when request for /admin fetch from ./routes/admin/index '/admin' route
app.use('/admin', route.adminRoute);

app.listen(port, () => console.log(`running express on ${port}`));