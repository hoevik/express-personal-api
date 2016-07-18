// require express and other modules
var express = require('express'),
    app = express();


// parse incoming urlencoded form data
// and populate the req.body object

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/


//hard coded profile
var role_models = [
  {
    name : 'Dale Carnegie',
    title: 'Author',
    nationality: 'American',
    description: 'Strongly influenced the litterature within self-improvement skills',
    img  : 'https://pbs.twimg.com/profile_images/550342238031466500/wfyfPUeK.jpeg',
    added_by: 'Fridtjof',
  },
  {
    name : 'Steve jobs',
    title: 'Founder of Apple',
    nationality: 'American',
    description: 'A man who understood how the market worked, and built thereafter.',
    img  : 'http://www.v3.co.uk/IMG/333/197333/steve-jobs-apple-colour.jpg',
    added_by: 'Fridtjof',
  }
];

 var db = require('./models'); //crash if opened now

/**********
 * ROUTES *
 **********/
app.use(express.static('public'));


/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
res.sendFile(__dirname + '/views/index.html');
});

// index profile
app.get('/api/profile', function(req, res ){
  db.Profile.find(function(err, data){
    if(err){
      return console.log('Error: ', err);
    }
      res.json(data);
  });
});

//Hardcoded role models base
app.get('/api/rolemodels', function(req, res){
  res.json(role_models);
});

// app.get('/api/rolemodels', function(req, res ){
//   db.Rolemodel.find(function(err, rolemodels){
//     if(err){
//       return console.log('Error: ', err);
//     }
//       res.json(rolemodels);
//   });
// });
//
//   //index rolemodels
// app.get('/api/rolemodels', function(req, res ){
//   db.Rolemodel.find(function(err, rolemodels){
//     if(err) {
//       return console.log('Error: ', err);
//     }
//       res.json(rolemodels);
//   });
// });


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: '/api', description: "Describes all available endpoints"},
      {method: "GET", path: '/api/profile', description: "Data about me"},
      {method: "GET", path: '/api/rolemodels', description: "All role models"}
    ]
  });
});

/*********1
 * SERVER *
 **********/

// listen on port 3000
    app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
