var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

    function rnGreeting() {
        
    var greetings = ["hey", "hello", "heyy"];
    
    var randomGreeting = greetings [Math.floor(Math.random() * 3)];
    
        return randomGreeting;
    }
    


app.get('/gr/:name', function (req, res){
        res.send (rnGreeting() + " " + req.params.name)
})

app.listen(8080, function () {
    console.log ('Example app listening on port 8080!')
    
})