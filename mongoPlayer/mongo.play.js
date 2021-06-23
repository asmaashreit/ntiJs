// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const myMongoURL = 'mongodb://127.0.0.1:27017'
dbName = 'g7'

MongoClient.connect(myMongoURL, {}, (error, client) => {
    if (error) return console.log('db error')
    const myDb = client.db(dbName)
        //myDb.collection('test').insert({ a: 'test' })
        //myDb.collection('test').insertOne({ a: 15 })
        //myDb.collection('test').insert({ x: 10 })
        // myDb.collection('test').insertMany(
        //         [{ a: 1 }, { c: 12 }, { m: "kjj" }]
        //     )
        // myDb.collection('test').insert({ a: 'test' },
        //     (err, res) => {
        //         if (err) return console.log('fe error')
        //         console.log(res.insertedId['0'])
        //     }
        // )

    // myDb.collection('test').findOne({ _id: new ObjectID("60c9c8f8b6dc863cc7d3987a") }, (err, res) => {
    //     console.log(res)
    // })

    // myDb.collection('test').updateOne({ _id: new ObjectID("60c9c8f8b6dc863cc7d3987a") }, { $rename: { b: 'x' } }).then(res => console.log(res.modifiedCount))
    //     .catch(err => { console.log(err) })

    myDb.collection('test').deleteOne({ _id: new ObjectID("60c9c95a5198693cfaf0bc64") }, ).then(res => console.log(res.deletedCount))
        .catch(err => { console.log(err) })
})