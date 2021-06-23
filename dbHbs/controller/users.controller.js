const dbConnection = require('../db/db')
const { ObjectID } = require('mongodb')

loginViews = (req, res) => {
    res.render('login')
}

addUserViews = (req, res) => {
    res.render('addUser')
}

addNewUser = (req, res) => {
    data = req.body
    dbConnection(db => {
        if (!db) return console.log('database error')
        db.collection('user').insertOne(data, (e, result) => {
            if (e) console.log(e)
            else console.log(result)
        })
    })
    res.redirect('/')
}

// showUsers = (req, res) => {
//     dbConnection(db => {
//         if (!db) return console.log('error show')
//         db.collection('user').find().toArray((e, users) => {
//             if (e) console.log(e)
//             else {
//                 console.log(users)
//                 res.render('all', { users })
//             }
//         })
//     })
// }

addOperationViews = (req, res) => {
    res.render('addOperation')
}

addNewOperation = (req, res) => {
    data = req.body
    dbConnection(db => {
        if (!db) return console.log('database error')
        db.collection('operations').insertOne(data, (e, result) => {
            if (e) console.log(e)
            else console.log(result)
        })
    })
    res.redirect('/')
}

showOperations = (req, res) => {
    dbConnection(db => {
        if (!db) return console.log('error show')
        db.collection('operations').find().toArray((e, operation) => {
            if (e) console.log(e)
            else {
                console.log(operation)
                res.render('all', { operation })
            }
        })
    })
}

showSingle = (req, res) => {
    let id = req.params.id
        // res.send(id)
    console.log(id)
    dbConnection(db => {
        db.collection('operations').findOne({ _id: new ObjectID(id) }, (err, operation) => {
            if (err) console.log(err)
            else res.render('showSingleOp', { operation })
        })
    })
}

deleteoperation = (req, res) => {
    let id = req.params.id
    dbConnection(db => {
        db.collection('operations').deleteOne({ _id: new ObjectID(id) })
            .then(data => { res.redirect('/') })
            .catch(e => { console.log(e) })
    })
}

editOperation = (req, res) => {
    let id = req.params.id
    newData = req.body
    dbConnection(db => {
        db.collection('operations').updateOne({ _id: new ObjectID(id) })
            .then(data => { data = newData })
            .catch(e => { console.log(e) })
    })
}

module.exports = {
    loginViews,
    addUserViews,
    addNewUser,
    addOperationViews,
    addNewOperation,
    showOperations,
    showSingle,
    deleteoperation
}