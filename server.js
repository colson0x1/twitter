const express = require('express');
const app = express();
const port = 3000;

const middleware = require('./middleware');

app.set("view engine", "pug");
app.set("views", "views");

// @routes
const loginRoute = require('./routes/loginRoutes');

app.use('/login', loginRoute);


const server = app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
})

app.get('/', middleware.requireLogin, (req, res) => {
    let payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);
})