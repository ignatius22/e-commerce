import express from 'express';
import exphbs  from 'express-handlebars';
import farmRouter from './route/farmRouter'
const app = express()

const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public/'));


app.use('/', farmRouter)



app.listen(port, ()=> {
  console.log('app running on ' + port)
});
