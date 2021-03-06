const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://colson:colson2022yeah@twittercluster.qf4bg.mongodb.net/TwitterDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database connection successful!");
        })
        .catch((err) => {
            console.log("Database connection error: " + err);
        });
    }
}

module.exports = new Database();