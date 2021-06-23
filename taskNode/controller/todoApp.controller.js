funcHelper = require('../helper/myfunction.helper')

addArticalController = (req, res) => {
    artical = {
        id: parseInt(((new Date()).getTime()) * Math.random()),
        title: '',
        content: ''
    }
    if (req.query.title == '' || req.query.content == '') {
        artical = req.query
        console.log(artical)
    }
    if (req.query.title && req.query.content) {
        req.query.id = artical.id
        funcHelper.addArtical(req.query)
        res.redirect('/showArticals')
    }
    res.render('articals', { pageTitle: 'Articals', id: artical.id, title: artical.title, content: artical.content })
}

showAllArticalsController = (req, res) => {
    allArticals = {
        pageTitle: 'show all data',
        allArticals: funcHelper.readData()
    }
    res.render('allArticals', allArticals)
}

showSingleArtical = (req, res) => {

}

getSingleArticalIndex = () => {

}

deleteSingleArtical = (articalId) => {

}

module.exports = {
    addArticalController,
    showAllArticalsController,
    showSingleArtical,
    deleteSingleArtical
}