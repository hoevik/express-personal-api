var mongoose = require("mongoose");
// mongoose.connect( process.env.MONGOLAB_URI ||
//                   process.env.MONGOHQ_URL ||
//                   "mongodb://localhost/personal-api");


mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost/personal-api");

//module.exports.Campsite = require("./campsite.js.example");

module.exports.Rolemodel = require('./rolemodel.js');
module.exports.Profile = require('./profile.js');
