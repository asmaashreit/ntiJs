const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]

const getAllData = () => JSON.parse(localStorage.getItem('tasks')) || []

const setAllData = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

const createCustomElement = (parent, element, classes, attributes, text) => {
    const myElement = document.createElement(element)
    parent.appendChild(myElement)
    if (classes != '') myElement.className = classes
    if (text != '') myElement.textContent = text
    if (attributes.length != 0) {
        attributes.forEach(attribute => {
            myElement.setAttribute(attribute.attrName, attribute.attValue)
        })
    }
    return myElement
}

// const drawTask = (task) =>{


//     console.log(task.id)
// }
const addTask = (task) => {
    tasks = getAllData()
    tasks.push(task)
    setAllData(tasks)
}

let tasks = getAllData()
allTasks = document.querySelector('#allTasks')
rowContainer = createCustomElement(allTasks, 'div', 'row', [], '')
tasks.forEach((task, i) => {
    // drawTask(task)
    taskDiv = createCustomElement(rowContainer, 'div', 'col-4 ', [], '')
    innerDiv = createCustomElement(taskDiv, 'div', 'm-4 bg-primary p-3', [], '')
    taskHeads.forEach(h => {
        h5 = createCustomElement(innerDiv, "h5", "", [], task[h])
    })
    delBtn = createCustomElement(innerDiv, 'button', 'btn btn-danger', [], 'delete')
    delBtn.addEventListener('click', function(e) {
        tasks = getAllData()
        tasks.splice(i, 1)
        this.parentElement.parentElement.remove()
        setAllData(tasks)
    })
    editBtn = createCustomElement(innerDiv, 'button', 'btn btn-success', [], 'Edit')
    editBtn.addEventListener('click', function(e) {
        tasks = getAllData()
        tasks.splice(i - 1, 1)[0]
        elechild = this.parentElement.childNodes

        if (tasks.splice(i - 1, 1)[0].id == elechild[0].innerHTML) {
            inputVal = document.querySelector('#addTask').querySelectorAll('.form-control')
            inputVal.forEach(val => {
                //console.log(val.name);

                taskHeads.forEach((h, i) => {
                    console.log(task.id)
                    if (i != 0 && h == val.name) {

                        val.value = task[h]
                    }
                })
            })
        }
        // elechild.forEach((el, i) => {

        //     if (i != 0 && elechild[i].tagName != 'BUTTON') {
        //         elChildVal = elechild[i].innerHTML
        //             //console.log(elChildVal)

        //     }


        // })


    })
})

document.querySelector('#addTask').addEventListener('submit', function(e) {
    e.preventDefault()
    if (tasks.length == 0) task = { id: 1 }
    else { task = { id: (tasks[tasks.length - 1].id + 1) } }
    // console.log(task)
    taskHeads.forEach((h, i) => {
        if (i != 0 && h != "status") task[h] = e.target.elements[h].value
        else if (h == "status") task[h] = e.target.elements[h].checked
    })
    addTask(task)
    this.reset()
})