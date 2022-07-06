const myEmail = "reyhanrf99@gmail.com"

function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById(`email`).value
    let phone = document.getElementById(`phone`).value
    let select = document.getElementById(`select`).value
    let message = document.getElementById(`message`).value
    

    if (!name) {

    }

    let a = document.createElement(`a`)
    a.href = `mailto:${myEmail}?select=${select}&body=Hello, my name is ${name}, ${message}, and this is my phone number ${phone}`
    a.click()
}
