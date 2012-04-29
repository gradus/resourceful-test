var resourceful = require('resourceful');

resourceful.use('couchdb', {database: 'users'} );

var User = resourceful.define('User', function () {

  this.string('name').pattern(/^[a-zA-Z0-9]{3,15}$/);

});

function getResult(result) {
  User.get(result._id, function (err, result) {
    console.log(result);
  });
}

User.create({name: 'Steve'}, function (err, result) {
  if (err) {
    throw new(Error)(err)
  } else {
    result.save(function (err) {
      if (!err) {
        console.log ("Created " + result.resource + " " + result.name + "\n");
        getResult(result);
      }
    });
  }
});
