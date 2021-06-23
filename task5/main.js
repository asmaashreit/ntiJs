// const chalk = require('chalk')
// console.log(chalk.blue('Hello world!'))

// const yargs = require('yargs')
// yargs.command({
//     command: 'a',
//     builder: {
//         user: { type: 'string', demandOption: true }, //require not optional
//         age: { type: 'number' }
//     },
//     handler: function(argv) {
//         console.log(`hello from yarges ${argv.user} ${argv.age}`)
//     }
// })

// console.log(yargs.argv)

const myFunctions = require('./myMethods')
const yargs = require('yargs')

yargs.command({
    command: "addTask",
    describe: "add New Task to tasks file",
    builder: {
        title: { type: "string", demandOption: true, describe: "task title" },
        content: { type: "string", demandOption: false, describe: "task content" }
    },
    handler: function(argv) {
        task = { title: argv.title, content: argv.content }
        myFunctions.addNewTask(task)
        myFunctions.showAllData()
    }
})

yargs.command({
    command: "showData",
    describe: "show all data",

    handler: function() {
        myFunctions.showAllData()

    }
})

yargs.parse()