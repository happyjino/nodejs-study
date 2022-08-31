var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log('1: ', queryData.id);
    if(_url == '/'){
      // _url = '/index.html';
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
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
      </ol>
      <h2>${title}</h2>
      <p>
        준비.txt를 보고 세팅한다!<br>
        response.end() 안의 내용에 따라 결과가 달라진다.
      </p>
    </body>
    </html>
    `;
    response.end(template);
});
app.listen(3000);