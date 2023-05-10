//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
//
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/VolCalculator.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

//use n1 for radium and n2 for height
  var radius = Number(req.body.n1);
  var volume = Number(req.body.n2);

// does the computation of the input variables, as numbers
//This is a new comment that is gor GitHub
  var height = 3 * volume / (Math.PI * Math.pow(radius, 2));

// sends the results back to the web page as string
  res.send("The height of a cone is " + height.toFixed(2));
})

//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
