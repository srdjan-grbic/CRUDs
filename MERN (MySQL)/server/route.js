const express = require('express'); 
const bodyParser = require('body-parser'); 
const exampleRoutes = require('./routes/exampleRoutes.js')
const app = express(); 

app.use(bodyParser.json()); 

app.use('/api/examples', exampleRoutes); 

const port = 3000; 
app.listen(port, () => {

    console.log("Everything is working, relax. "); 

}); 