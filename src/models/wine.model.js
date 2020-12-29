const mongoose = require('mongoose');

//utilizarlo
const Schema = mongoose.Schema;




// defino el eschema
const WineSchema = new Schema({
    
    Id: Number,
    title: String,
    characteristic: String, 
    createdAt: Date,
    updatedAt: Date,
    
    
});

// exportamos
module.exports = mongoose.model('Wine', WineSchema);