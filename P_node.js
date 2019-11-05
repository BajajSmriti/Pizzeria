var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded ({ extended: false })
var jsonParser = bodyParser.json()

var dummyf= require('./P_db')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
 })

app.get('/pizza',function(request, response) {
    dummyf.connectf(request,response)
})


app.get('/ingredients', function(request, response){
    dummyf.connectf2(request,response)
})

app.post('/cart', jsonParser,function(request, response) {
    console.log(request.body.id,request.body.items)
    dummyf.connectf4(request,response)
})
app.get('/cart', function(request, response) {
    dummyf.connectf3(request,response)
})

app.post('/deleteo', jsonParser,function(request, response) {
    dummyf.connectf5(request,response)
})

app.post('/updateq', jsonParser ,function(request, response) {
    dummyf.connectf6(request,response)
})

app.post('/drop', jsonParser ,function(request, response) {
    dummyf.connectf7(request,response)
})

app.listen(2000,() => { console.log("Server listening at 2000");  } )
