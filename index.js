const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

const farmer = [
    {
        name: "Akash",
        pw: 123,
        id: 0001,
        ph: 1234567890,
        aadhar: 000011112222,
        kisancard: 8564,
        location: "Arunachal",
        pref_comm: "rice" 
    }
]

const buyer = [
    {
        name: "Arjun",
        pw: 123,
        ph: 1234523456,
        aadhar: 333344445555,
        pref_comm: "rice",
        addr: "Arunachal"
    }
]



app.get('/', (req,res) => {
    res.render('home');
});

app.get('/buyerlogin', (req,res) => {
    res.render('buyerlogin');
});

app.get('/farmerlogin', (req,res) => {
    res.render('farmerlogin');
});

app.listen(8000, ()=>{
    console.log("server on port 8000");
})