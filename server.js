const bodyParser = require("body-parser")
const express = require("express")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/" , function(req , res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    height = height / 100;
    height = Math.pow(height , 2);

    var bmi = weight / height;

    res.send("Your BMI is : " + bmi);

})

app.listen(3000 , function(req , res){
    console.log("Server started at port 3000");
})