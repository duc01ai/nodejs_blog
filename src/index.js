const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
//HTTP LOGGER
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'))

//xemduongdan
// console.log('PATH: ', path.join(__dirname, 'resources/view'))

app.get('/home', (req, res) => {
  res.render('home');
});
// 127.0.0.1 - localhost 

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`)});