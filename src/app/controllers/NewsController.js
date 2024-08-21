class NewsController {
    
    //[GET], news
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('Slug')
    }
}

module.exports = new NewsController;