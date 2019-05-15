const express = require('express');
const port = 9797;
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017/mydb', (err, client) => {
        if (err) 
            console.log(err);

        var db = client.db('mydb');

        db.collection('books').find().toArray((err, result) => {
            if (err)
                console.log(err);
            console.log(result);
            res.send(result);
        });
    });
});

app.listen(port,()=>console.log("Sever Running on 9797"));
