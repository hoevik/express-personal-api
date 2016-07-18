// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var profile = {
    name: 'Fridtjof Hovik',
    github_link: 'https://github.com/hoevik',
    github_profile_image: 'https://avatars1.githubusercontent.com/u/20092657?v=3&s=460',
    current_city: 'San Francisco',
    entrepreneur: true
  };



// var rolemodels_list = [
//   {
//     name : 'Fridtjof',
//     title: 'Master of Norway',
//     nationality: 'Norwegian',
//     description: 'Goddam awsome',
//     img  : 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12930935_992827714166548_1676581055_n.jpg',
//     added_by: 'Fridtjof'
//   }
// ];
//
//
//
// // db.Rolemodel.remove({}, function(err, rolemodels) {
//   if (err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all role models');
//
//     db.Rolemodel.create(rolemodels_list, function(err, rolemodels){
//       if (err) {
//         return console.log('err', err);
//       }
//       console.log("created", rolemodels.length, "role models");
//       process.exit();
//     });
//   }
// // });


db.Profile.remove({}, function(err, data) {
  if (err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all info');

    db.Profile.create(profile, function(err, data){
      if (err) {
        return console.log('err', err);
      }
      console.log("created", data.length, "profile");
      process.exit();
    });
  }
});
