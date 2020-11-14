import express from 'express'
var exphbs  = require('express-handlebars');
const app = express()

const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home');
});


app.listen(port, ()=> {
  console.log('app running on ' + port)
});
