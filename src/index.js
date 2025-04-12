const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./router');
const app = express();
const port = 3000;

//HTTP LOGGER
// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'));

//xemduongdan
// console.log('PATH: ', path.join(__dirname, 'resources/view'))]
route(          app);

            app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
