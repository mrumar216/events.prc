console.log("event")

const button = document.getElementById("button")

const title = document.getElementById("title")

const description = document.getElementById("description")

console.log(title)

console.log(description)

console.log(button)

const handlebuttonclick = () => {
    console.log(title.value)
    console.log(description.value)
    console.log("click")
}

button.addEventListener("click", handlebuttonclick)