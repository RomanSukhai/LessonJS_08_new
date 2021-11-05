var express = require('express')
var bodyJason = require('body-parser')

var server  = express();
var JasonParser = bodyJason.json();

server.use(express.static(__dirname));
server.use(JasonParser);
server.get('/',function (request,respond) {
    console.log("Start is runing");
    respond.send('<h1>Wellcom to the Lesson</h1>')
});
server.get('/userGet',function (request,respond) {
    console.log(request.query);
    respond.send('You have secsessful send Get method'+JSON.stringify(request.query))
})
server.post('/userPost',function (request,respond) {
    console.log(request.body);
    respond.send('You have secsessful send Get method'+JSON.stringify(request.body))
})

server.listen(3000);

