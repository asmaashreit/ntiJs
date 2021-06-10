// const myProm = (num) => {
//     let number = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof num == 'numder') { resolve(num) } else { reject('type of not number') }
//         }, 2000)

//     })
//     return number
// }

// typNum = async() => {
//     try {
//         num = await myProm('s')
//         return num
//     } catch (e) {
//         return e
//     }

// }

// console.log(typNum())

const createNewElement = (parent, element, text = false, classes = false) => {
    myElement = document.createElement(element)
    parent.appendChild(myElement)
    if (text) myElement.textContent = text
    if (classes) myElement.className = classes
    return myElement
}

const getData = async(callback) => {

    let x = await fetch('https://api.covid19api.com/summary')
    let y = await (x.json())
    callback(y)
        //callback(y, false)
}

let coronaTable = document.querySelector('#corona')
createNewElement(coronaTable, 'thead')

createNewElement(coronaTable, 'tbody', '', 'coronaRows')

let coronaHead = document.querySelector('#corona thead')
let coronaHeadTr = createNewElement(coronaHead, 'tr')
let coronaRows = document.querySelector('#corona tbody')


let setItems = (element) => localStorage.setItem('corona', JSON.stringify(element))


getData((data) => {

    let dataContry = data.Countries
    setItems(dataContry)

    let getItems = JSON.parse(localStorage.getItem('corona'))

    coronaKeys = Object.keys(getItems[0])

    coronaKeys.forEach(ele => {

        createNewElement(coronaHeadTr, 'th', ele)

    })
    getItems.forEach((element, i) => {
        coronaRowsTr = createNewElement(coronaRows, 'tr')
        coronaKeys.forEach(ele => {
            createNewElement(coronaRowsTr, 'td', element[ele])
        })
    })


})