var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017';
const dbName = 'PizzeriaDB'

exports.connectf = function(req,res){
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("pizza").find().toArray(function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            })
            client.close()
        }
    })
}

exports.connectf2 = function(req,res){
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("ingredients").find().toArray(function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            })
            client.close()
        }
    })
}


exports.connectf3 = function(req,res){
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("cart").find().toArray(function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            })
            client.close()
        }
    })
}

exports.connectf4 = function(req,res){
    console.log(req.body.id,req.body.items,req.body.quantity,req.body.amount)
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("cart").insertMany([{
                id:req.body.id,
                items:req.body.items,
                quantity:req.body.quantity,
                amount:req.body.amount
            }]),function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            }
            client.close()
        }
    })
}

exports.connectf5 = function(req,res){
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("cart").deleteOne({
                items:req.body.items,
                quantity:req.body.quantity
            }),function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            }
            client.close()
        }
    })
}

exports.connectf6 = function(req,res){
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("cart").update({
                items:req.body.items
            },{$set:{quantity:req.body.quantity}}),function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            }
            client.close()
        }
    })
}

exports.connectf7 = function(req,res){
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err)
        }
        else {
            const db = client.db(dbName)
            db.collection("cart").drop(),function (err, result) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }
            }
            client.close()
        }
    })
}