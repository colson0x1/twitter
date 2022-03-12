const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "views");

const server = app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
})

app.get('/', (req, res) => {
    let payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);
})