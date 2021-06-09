const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]

const getTaskData = () => {
    let allTask = JSON.parse(localStorage.getItem('tasks')) || []
    return allTask
}

const setTaskData = (task) => localStorage.setItem('tasks', JSON.stringify(task))

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
    createNewElement(trTable, 'td', '', newTaskRow.id)
    createNewElement(trTable, 'td', '', newTaskRow.taskTitle)
    createNewElement(trTable, 'td', '', newTaskRow.taskContent)
    createNewElement(trTable, 'td', '', newTaskRow.taskTaskType)
    createNewElement(trTable, 'td', '', newTaskRow.taskDueDate)
    createNewElement(trTable, 'td', '', newTaskRow.taskStatus)
    createNewElement(trTable, 'td', '', newTaskRow.taskImportant)
    let td = createNewElement(trTable, 'td')
    delbtn = createNewElement(td, 'button', '', "delete")
}

const addTask = (taskId, title, content, taskType, dueDate, status, important) => {
    let newTask = {
        id: taskId,
        taskTitle: title,
        taskContent: content,
        taskTaskType: taskType,
        taskDueDate: dueDate,
        taskStatus: status,
        taskImportant: important
    }

    alltasks = getTaskData()
    alltasks.push(newTask)
    setTaskData(alltasks)
        //tdRowTask(newTask.length, newTask)
}

//addTask(9, 8, 7, 6, 5, 4, 3)

const showTaskData = () => {
    alltasks = getTaskData()
    alltasks.forEach((el, i) => {
        console.log(`${el.taskTitle} ==> ${el.taskContent} ==> ${el.taskTaskType} ==> ${el.taskDueDate} ==> ${el.taskStatus} ==> ${el.taskImportant}`)
        tdRowTask(i + 1, el)
    })

}
showTaskData()
const findIndexTask = (taskid) => {
    alltasks = getTaskData()
    indexTask = alltasks.findIndex(el => el.id == taskid)
    return indexTask
}