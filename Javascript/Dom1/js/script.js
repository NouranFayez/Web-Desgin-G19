// -- Dom ==> document object Model

document.getElementById("h1_text")
// console.log(document.getElementById("h1_text")) // return 1 Element

let h1 = document.getElementById("h1_text").innerText = "hhjkk"

// console.log(h1.innerText) // get value
h1.innerText = "bootstrap" // set value

// console.log(h1)

let h1Elements = document.getElementsByTagName("h1") // return Array

// console.log(h1Elements)

// h1Elements[0].innerText = "Node"
// h1Elements[0].innerText = "Node"
// h1Elements[0].innerText = "Node"
// h1Elements[0].innerText = "Node"

for(var i = 0 ; i < h1Elements.length ; i++){
    h1Elements[i].innerText = "Node"+" " + i
    h1Elements[i].innerText = `Node  vghjk  ghjh hhg  ${i}`
}


let elementsClass = document.getElementsByClassName("text_style")

console.log(elementsClass)


let className = document.querySelector(".text_style")
let classNameAll = document.querySelectorAll(".text_style")

console.log(className)
console.log(classNameAll)


let h2 = document.querySelector("#h2_element")

// h2.innerText = "Bootstrap"
h2.innerHTML = "<p>Bootstrap</p>"


let h3 = document.getElementsByClassName("h3_style")

// h3[0].style.width = "300px"
// h3[0].style.height = "300px"
// h3[0].style.backgroundColor = "lightgray"
// h3[0].style.border = "5px solid red"
// h3[0].style.fontSize = "30px"

// h3[0].className = "custom-h3"
h3[0].classList.add("custom-h3" , "custom-padding")
h3[0].classList.remove("custom-padding")
h3[0].classList.toggle("custom-margin")

console.log(document.forms)

console.log(document.title)
document.title = "Dom 1"
console.log(document.head)

console.log(document.images)
console.log(document.images[0].id)
console.log(document.images[0].alt)
document.images[0].alt = "dfghjkl"
document.images[0].width = 400
document.images[0].height = 400

document.images[0].src = "images/2.jpg"


console.log(document.scripts)







