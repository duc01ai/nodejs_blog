const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter);
    // app.use('/home', siteRouter)
    // app.use('/search', siteRouter)
    app.use('/', siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //     // console.log(req.query.q);
    //     });
    // app.get('/search', (req, res)=>{
    //     res.render('search');
    // })
    // app.post('/search', (req, res)=>{
    //     console.log('Form has been submitted');
    //     console.log('Body:', req.body);
    //     res.render('search');
    // })
}

module.exports = route;
