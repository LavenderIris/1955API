var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    show: function(req, res) {
        Person.find({}, function(err, persons){
            if(err){
                console.log(err);
            } else {
                res.json(persons);
            }
        });
    },
    showOne: function(req, res) {
        Person.find({name:req.params.name}, function(err, persons){
            if(err){
                console.log(err);
            } else {
                res.json(persons);
            }
        });
    },
    create: function(req, res) {
        var p = new Person();
        p.name = req.params.name;
        p.save(function(err) {
            if(err){
                console.log(err);
            } else {
                console.log('successful save');
            }
        });
    }, 
    delete: function(req, res){
        Person.remove({name:req.params.name}, function(err, persons){
            if(err){
                console.log(err);
            } else {
                console.log('successful delete');
            }
        });
    }
    
}