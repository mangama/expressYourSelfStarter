var feelings = require("../data/feelings");
var responses = require("../data/responses");



module.exports = function (app) {
    app.get('/api/feelings', function(req, res){
        res.send(feelings);
    })

    app.get('/api/responses', function(req, res){
        res.send(responses);
    })
//responses is the GET, the response is the POST
    app.post("/api/response", function(req,res){
        // console.log(req.body);
        responses.push(req.body);
        res.send(true);
    })


}

