const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    Id: Number,
    name: String,
    lastName: String,
    email: String,
    password: String,
    numberPhone: Number,
    age: Number,
    
});

module.exports = mongoose.model('Client', ClientSchema);