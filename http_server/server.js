var http = require ("http");
var url = require ("url");

function start(route,handle) {
  function onRequest(request,response)
  {
    console.log ("Request Received");
    var pathname = url.parse (request.url).pathname;
    console.log ("Request Received for " + pathname);

    var content = route (handle, pathname);
    console.log ("Received content " + content);
    response.writeHead (200, {"Content-Type":"text/plain"});
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log ("Server Started");
}

exports.start = start;
