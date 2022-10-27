let btn = document.getElementById("myButton")
let div = document.getElementById("custom_div")
let form = document.querySelector("#myForm")
let container = document.querySelector(".container")
let scrollDiv = document.querySelector(".scroll-div")
// let scrollDiv = document.querySelectorAll(".scroll-div")
let toBtn = document.getElementById("toBtn")
// let toBtn = document.getElementsByClassName("toBtn")

btn.addEventListener('click' , function(e){
    console.log(e)

    // div.style.background = "lightgray"
    // p 
    // button

    // let p = document.createElement("p")
    // let btn = document.createElement("button")
    // p.innerText = "lorem ipsum"
    // btn.innerText = "Register"
    // console.log(p)
    // console.log(btn)
    // container.appendChild(p)
    // container.appendChild(btn)
    // container.prepend(p)
    // container.prepend(btn)


})

form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log("form is submitting....")
    console.log(e)
    console.log(e.target.elements.input_id.value)
    console.log(e.target[0].value)
    console.log(e.target.elements[0].value)
})


function createTags(element){
    let p = document.createElement("p")
    let btn = document.createElement("button")
    p.innerText = "lorem ipsum"
    btn.innerText = "Register"
    console.log(p)
    console.log(btn)
    container.prepend(p)
    container.prepend(btn)
    console.log(element)
}

// scroll on Element
scrollDiv.addEventListener('scroll' ,function(e){
    console.log(e)
    if(e.target.scrollTop > 400){
        e.target.style.background = "lightgray"
    }
    else e.target.style.background = "white"
})

// scroll on window

window.addEventListener('scroll' , function(){
    if(document.documentElement.scrollTop > 600)
        toBtn.style.display = "block"
    else toBtn.style.display = "none"
})



setTimeout(()=>{
    console.log("time")
} , 5000)

console.log("after time")

let counter = document.querySelector('.counter')
let counter1 = document.querySelector('.counter1')
let counter2 = document.querySelector('.counter2')
let counter3 = document.querySelector('.counter3')
let i = 0
counter.innerText = i

let set = setInterval(()=>{
    if(i == 100){
        clearInterval(set)
    }
    counter.innerText =  i
    i+=10
} , 1000)


// function count(tag , enNum){

// }
 
// count(counter , 800)
// count(counter2 , 8000)
// count(counter3)
// count(counter4)

