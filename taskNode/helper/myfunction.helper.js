const fs = require('fs')

readData = () => {
    try {
        data = JSON.parse(fs.readFileSync('articals.json').toString())
    } catch (e) {
        data = []
    }
    return data
}

writeData = (data) => {
    try {
        fs.writeFileSync('articals.json', JSON.stringify(data))
    } catch (e) {
        fs.writeFileSync('articals.json', '[]')
    }
}

addArtical = (artical) => {
    allArticals = readData()
    allArticals.push(artical)
    writeData(allArticals)
}

module.exports = { readData, writeData, addArtical }