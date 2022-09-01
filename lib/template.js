module.exports = {
  HTML:function templateHTML(title, list, body, control){
    return `
      <!doctype html>
      <html>
      <head>
        <title>web - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
    `;
  }, 
  list:function templateList(filelist){
    var list = '<ul>';
    var i = 0;
    while(i<filelist.length){
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i += 1;
    }
    list += '</ul>'
    return list;
  }
}