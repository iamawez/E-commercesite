const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views")); 
app.use(express.static('./public'));

app.get('/', function(req, res){
    console.log("E-commerce site");
    res.render("index");  
});

app.get('/:name', function(req, res){
    console.log("E-commerce site");
    res.render(`${req.params.name}`);  
}); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 