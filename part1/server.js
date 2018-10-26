var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
let fs = require("fs");


app.get('/hello', function(req, res) {
  res.send("Hello");
});

app.get("/", function(req, res){
  fs.readFile("./index.html", (err, data)=>{
    if (err){
      console.log(err);
    }else{
      res.send(data)
    }
  });
});

app.get("/verify/:age", function(req, res){
  let age = Number(req.params.age)
  if(age > 13){
    res.send(200);
  } else{
    res.send(403);
  }
})

app.post('/create/:name', function(req, res){

  res.json({
    id:1,
    name: req.params.name
  })
})


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
