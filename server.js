var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(url == '/'){
      url = '/index.html';
    }

    if(request.method == 'POST')
    {
      fs.readFile('./index.html' ,'utf8' ,function(error, data) {
          response.writeHead(200, {'Content-Type' : 'text/html'});
          response.end(data);
      });
  }


  else if(request.method == 'POST'){
    request.on('data', function(chunk){
        console.log(chunk.toString());
        var data = querystring.parse(chunk.toString());
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end('고도 : ' + data.velocity + '속도 : '  + data.velocity);

        console.log('고도 : ' + data.velocity + '속도 : '  + data.velocity);
          });
}


    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(16384, function(){ 
    console.log('2023 캔위성 WebServer');
});
