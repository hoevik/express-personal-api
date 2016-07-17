var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var RolemodelSchema = new Schema({
    name : String,
    title: String,
    nationality: String,
    description: String,
    img  : String,
    added_by: String,
});

var Rolemodel = mongoose.model('Rolemodel', RolemodelSchema);

module.exports = Rolemodel;
