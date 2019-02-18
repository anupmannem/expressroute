const express = require('express');
const port = process.env.PORT || 3000;
// if index.js no need to be specific, express will pick it
const route = require('./routes/index');

const app = express();

// when request for /user fetch from ./routes/user/index '/user' route
app.use('/', route.userRoute);
// when request for /admin fetch from ./routes/admin/index '/admin' route
app.use('/', route.adminRoute);

app.listen(port, () => console.log(`running express on ${port}`));