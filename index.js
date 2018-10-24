const express = require("express");

const app = express();
//uses express

//uses file sync to write in the json later
const fs = require('fs');
var data= fs.readFileSync('names.json');
var names = JSON.parse(data);
console.log(names);

//starts server
const server = app.listen(3000, listening);

app.use(express.static("public"));

//shows server is running
function listening() {
	console.log("i am listening. . .")
};


//route to get name and phone number from user
app.get('/add/:name/:phone', addPhone);


function addPhone(request, response){
	//gets the route parameters
	var data = request.params; 
    var name = data.name;	
    //create numerical object from phone route 
    var phone = Number(data.phone);
    //assigns phone number to name in object
    name[name] = phone;
    //writes to json file
    var data = JSON.stringify(name); 
    fs.writeFile('names.json', data); 
    
}

//route to see the json file 
app.get('/all', sendAll);
function sendAll(request, response){
    response.send(names);
}
  



