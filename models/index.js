var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api"); 
 mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );

//module.exports.Campsite = require("./campsite.js.example");

module.exports.Rolemodel=require('/.rolemodel.js');
//module.exports.Profile=require('/.Profile.js');
