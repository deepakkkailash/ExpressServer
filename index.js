let exp = require("express");
let fs = require("fs");
let app = exp();
let bodyParser = require('body-parser')
 const Port = 8000;



app.use(express.static(__dirname + '/public'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());



app.get("/",function(req,res){
    res.sendFile('index.html');
});

app.post("/submit",function(req,res){
       let name = req.body.name;
        let age = req.body.age;
        res.send(`name is ${name} and age is ${age}`);
        res.end();  
});



app.listen(Port,function(){
    {
        console.log(`I am listening on ${port} port`);
    }
});



