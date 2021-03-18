const express = require('express');
const app = express();
const path = require('path');

app.use('view engine',path.join(__dirname,'/public'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/', (req,res) => {
    res.render('Home');
});

app.listen(8000, ()=>{
    console.log("server on port 8000");
})