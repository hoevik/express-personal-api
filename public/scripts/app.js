console.log("Sanity Check: JS is working!");
// var template;
// var $RoleModelsList;
// var allRoleModels = [];

$(document).ready(function(){

   //$RoleModelsList = $('#roleModelTarget');

   var source = $("#entry-template").html();
   template = Handlebars.compile(source);

   var context = {title: "My New Post", body: "This is my first post!"};
   var html    = template(context);

  // $.ajax ({
  //   method: 'GET',
  //   url: '/api/rolemodels',
    // success: handleSuccess,
    // error: handleError
  });

  // var role_models = {
  //     name : 'Dale Carnegie',
  //     title: 'Author',
  //     nationality: 'American',
  //     description: 'Strongly influenced the litterature within self-improvement skills',
  //     img  : 'https://pbs.twimg.com/profile_images/550342238031466500/wfyfPUeK.jpeg',
  //     added_by: 'Fridtjof',
  //   };
  //
  // var html = template(role_models);

//   function render() {
//   $RoleModelsList.empty();
//   var rolemodelsHtml = template({ rolemodels: allRoleModels });
//   $RoleModelsList.append(rolemodelsHtml);
//   }
//
//   function handleSuccess(json) {
//   allRoleModels = json;
//   render();
// }

// function handleError(e) {
//   console.log('uh oh');
//   $('#role_models_template').text('Failed to load role models, is the server working?');
// }
