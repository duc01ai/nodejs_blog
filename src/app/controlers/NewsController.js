class NewController {
    // [get] troc vao cai path la new
    index(req, res) {
        res.render('news');
    }
    //slug
    show(req, res) {
        res.send('new detail!!!');
    }
}

module.exports = new NewController();
