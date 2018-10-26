var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
let fs = require("fs");

app.get('/', function(req,res){
  fs.readFile("./storage.json", "utf8", function(err, data){
    res.json(JSON.parse(data));
  })
});

app.get("/:name", function(req,res){
  fs.readFile("./storage.json", "utf8", function(err,data){
    let someData = JSON.parse(data);
    let matchedUser = someData.filter((item)=> {
      return item.name  == req.params.name;
    });

    if(matchedUser.length>=1){
      res.json(matchedUser[0]);
    }else{
      res.sendStatus(400);
    }
  })
})

app.post("/create/:name/:age", function(req,res){
  let newObj = {
    name: req.params.name,
    age: parseInt(req.params.age)
  }

  fs.readFile("./storage.json", 'utf8', function(err,data){
    let dataAsArr = JSON.parse(data);

    dataAsArr.push(newObj);

    fs.writeFile("./storage.json", JSON.stringify(dataAsArr), function(err){
      res.sendStatus(200);
    })
  })
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
