var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: {type: String, required: true},
})

var Person = mongoose.model('Person', personSchema);