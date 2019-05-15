var express = require('express');
var app =express();
var bodypar = require('body-parser');
app.use(bodypar.json());
app.use(bodypar.urlencoded({extended:true}));


app.get('/',(req,resp)=>{
    resp.sendFile(__dirname+'/index.html');
});

app.get('/login.html',(req,resp)=>{
    resp.sendFile(__dirname+'/login.html');
});
app.get('/sucsess.html',function(req,res){
    res.sendFile(__dirname+"/sucsess.html");
});
app.get('/error.html',function(req,res){
    res.sendFile(__dirname+"/error.html");
});

app.post('/val',(req,res)=>{
    console.log("this console"+console.log(req.body));
    var usrename = req.body.username;
    var password = req.body.password;
    if(usrename == "shubham" && password == "shubham")
    {
        console.log("welcome to server ");
        res.redirect('/sucsess.html');
    }
    else{
        console.log("error");
        res.redirect('/error.html');
    }
});

app.listen(5200,()=>{
    console.log("listing 5200");
});