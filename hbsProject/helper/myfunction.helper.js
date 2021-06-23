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
    fs.writeFileSync('articals.json', JSON.stringify(data))
}

addTask = (task) => {
    allData = readData()
    try {
        allData.push(task)
        writeData(allData)
        result = {
            status: true
        }
    } catch (e) {
        result = {
            status: false,
            error: e
        }
    }
    return result
}

module.exports = {
    readData,
    writeData,
    addTask
}