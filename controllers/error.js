exports.get404 = (req, res, next) => {
    res.render('404', {
        pageTitle: 'Not found',
        path: '/not_found'
    })
}