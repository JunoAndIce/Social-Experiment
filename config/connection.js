const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.7tlqvsu.mongodb.net/socialnetwork');

module.exports = connection;
