const express = require('express');

const app = express();


const PORT = 8000;
app.listen(PORT, '0.0.0.0', ()=> {
    console.log("App started in port: " + PORT)
});

