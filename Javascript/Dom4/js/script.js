

localStorage.setItem("fName", "Nouran")
localStorage.setItem("address", "Nasr city")
localStorage.setItem("age", "28")



let h1 = document.querySelector(".h1")

console.log(localStorage.getItem("userName"))




if (localStorage.getItem("userName") == null) {
    let p = prompt("enter your Name")
    localStorage.setItem("userName", p)
    let userName = localStorage.getItem("userName")
    h1.innerText= `welcome ${userName}`
}
else {
    let userName = localStorage.getItem("userName")
    h1.innerText= `welcome ${userName}`
}

let courses = ["html" , "css" , "Bootstrap" , "js"]


let users = [
    {name : "tamer" ,
    age: 35},
    {name : "Omar" ,
    age: 10},
    {name : "Marwa" ,
    age: 35}
]
console.log(users)

localStorage.setItem("courses" , courses)

let newArray = localStorage.getItem("courses")
console.log(localStorage.getItem("courses"))
// newArray.push("Node")


let str = JSON.stringify(users)

// str.push({name:"Nada" , age : 10})

console.log(typeof str)
console.log(str)
localStorage.setItem("usersList" , JSON.stringify(users) )

let newArr = JSON.parse(str)

console.log(users.toString())


newArr.push({
    name:"Mohamed" , 
    age : 20
})
newArr.push("Developer")
console.log(newArr)

console.log(JSON.parse(localStorage.getItem("usersList")))

// JSON ==> Javascript object Notation

localStorage.removeItem("address")




sessionStorage.setItem("name" , "Ahmed")
sessionStorage.setItem("address" , "october")
sessionStorage.getItem("address")
sessionStorage.removeItem("name")



let ul = document.getElementById("ul_id")


console.log(ul.firstElementChild)


// Relationship between elements
ul.firstElementChild.style.background = "lightgray"
ul.lastElementChild.style.color = "red"

ul.lastChild

let li = document.querySelector(".li_class")

li.nextElementSibling.style.color = "blue"
li.previousElementSibling.style.color = "blue"

console.log(li.parentNode)
console.log(li.parentElement)