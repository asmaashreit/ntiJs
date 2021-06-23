const taskHeads = ["title", "content", "taskType", "dueDate", "status", "important"]

const getTaskData = () => {
    let allTask = JSON.parse(localStorage.getItem('tasks')) || []
    return allTask
}

const setTaskData = (task) => localStorage.setItem('tasks', JSON.stringify(task))

const addTaskForm = document.querySelector('#addTask')

const createNewElement = (parent, element, classes = false, text = false) => {
    myElement = document.createElement(element)
    parent.appendChild(myElement)
    if (classes) myElement.className = classes
    if (text) myElement.textContent = text
    return myElement
}

tdRowTask = (i, newTaskRow) => {
    let trParent = document.querySelector('#taskData')
    let trTable = createNewElement(trParent, 'tr')
    createNewElement(trTable, 'td', '', i)
        //createNewElement(trTable, 'td', '', newTaskRow.id)
    createNewElement(trTable, 'td', '', newTaskRow.title)
    createNewElement(trTable, 'td', '', newTaskRow.content)
    createNewElement(trTable, 'td', '', newTaskRow.taskType)
    createNewElement(trTable, 'td', '', newTaskRow.dueDate)
    createNewElement(trTable, 'td', '', newTaskRow.status)
    createNewElement(trTable, 'td', '', newTaskRow.important)
    let td = createNewElement(trTable, 'td')
    delbtn = createNewElement(td, 'button', '', "delete")
    editbtn = createNewElement(td, 'button', '', "edit")
}

addTaskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    newTask = {}
    taskHeads.forEach((ele, i) => {
            newTask[ele] = this.elements[ele].value
        })
        //console.log(newTask)
    addTask(newTask)

})


const addTask = (newTask) => {
    alltasks = getTaskData()
    alltasks.push(newTask)
    setTaskData(alltasks)

    //tdRowTask(newTask.length, newTask)
}

//addTask(9, 8, 7, 6, 5, 4, 3)

const showTaskData = () => {
    alltasks = getTaskData()
    alltasks.forEach((el, i) => {
        console.log(`${el.title} ==> ${el.content} ==> ${el.taskType} ==> ${el.dueDate} ==> ${el.status} ==> ${el.important}`)
        tdRowTask(i + 1, el)
    })

}
showTaskData()
const findIndexTask = (taskid) => {
    alltasks = getTaskData()
    indexTask = alltasks.findIndex(el => el.id == taskid)
    return indexTask
}