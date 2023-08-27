const { connect, connection } = require('mongoose');

connect('mongodb+srv://ekwereedi:Parabellum@cluster0.7b79zip.mongodb.net/socialDB');

module.exports = connection;
