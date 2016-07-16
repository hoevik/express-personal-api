var Rolemodel = mongoose.model('Rolemodel', RolemodelSchema);



var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolemodelSchema = new Schema({
    name : String,
    title: String,
    nationality: String,
    description: String,
    img  : String,
    added_by: String, 
});


module.exports = Rolemodel;
