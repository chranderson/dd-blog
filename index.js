// Require the server app.
var app = require('./src/server');

// Start the server
var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Blog is up at http://%s:%s', host, port)

})
