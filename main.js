var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
      if(queryData.id === undefined){
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=nodejs1">nodejs1</a></li>
              <li><a href="/?id=nodejs2">nodejs2</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
        `;
        response.writeHead(200);
        response.end(template);
      } else{
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err,description){
          var title = queryData.id;
          var template = `
            <!doctype html>
            <html>
            <head>
              <title>${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ol>
                <li><a href="/?id=nodejs1">nodejs1</a></li>
                <li><a href="/?id=nodejs2">nodejs2</a></li>
              </ol>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
          `;
          response.writeHead(200);
          response.end(template);
        })
      }
    }else{
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);