var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();

var ListUsers = {

    "user1" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    },
       "user2" : {
        "name" : "mahesh",
        "password" : "password1",
        "profession" : "teacher",
        "id": 1
     },
     
     "user3" : {
        "name" : "suresh",
        "password" : "password2",
        "profession" : "librarian",
        "id": 2
     },
     
     "user4" : {
        "name" : "ramesh",
        "password" : "password3",
        "profession" : "clerk",
        "id": 3
     }
    }
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json()); 

app.get('/ListUsers', function(req, res) {
       
        console.log(req.body );
        res.send( req.body );
   });
        
   
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

app.post('/ListUsers', function (req, res) { 
      
        console.log(req.body);
        res.send(req.body);
 });

 var port = process.env.PORT || 8082;

    app.listen(port);
    console.log('server listening at port' + port);

    module.exports = router;