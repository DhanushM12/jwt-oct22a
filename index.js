const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    // res.send('<h1>Welcome to Node Js!!!</h1>')
    res.json({message: "Welcome to node"})
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`)
})