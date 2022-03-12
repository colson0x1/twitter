const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./database');
const session = require('express-session');

const middleware = require('./middleware');

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "i love molly, whiskey & $$$$$$$",
    resave: true,
    saveUninitialized: false
}))

// @routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use('/login', loginRoute);
app.use('/register', registerRoute);


const server = app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})

app.get('/', middleware.requireLogin, (req, res) => {
    let payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);
})
