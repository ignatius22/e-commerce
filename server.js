import express from 'express';
import exphbs from 'express-handlebars';
import farmRouter from './route/farmRouter';
import adminFarmRouter from './route/farmAdminRoute'
import mongoose from 'mongoose'


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();

const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use('/', farmRouter);
app.use('/admin', adminFarmRouter);


app.listen(port, () => {
  console.log('app running on ' + port);
});
