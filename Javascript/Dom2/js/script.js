let div = document.querySelector(".custom_div")
let img = document.getElementById("custom_img")


function changeDiv(type , element){
    (type == 'mouseenter') ? element.style.background = 'lightgray' :   element.style.background = 'white'
}

// function changeDiv2(){
//     document.querySelector('.custom_div').style.background = 'white'
// }

function changeImg(){
    console.log(img.src)
    if(img.src.endsWith("download.jpg")){
        img.src = "images/download2.jpg"
    }
    else img.src = "images/download.jpg"
}


let input = document.querySelector("#input_id")

// input.addEventListener('input' ,changeInput)


// function changeInput(){

// }

input.addEventListener('input' , function(e){
    // console.log('typing...')
    // console.log(input.value)
    // console.log(e)
})

let select = document.getElementById("custom_select")

select.addEventListener("change" , function(){
    // console.log(select.value)
})

input.addEventListener('change' , function(){
    // console.log(input.value)
})

let form = document.getElementById("custom_form")

// form.addEventListener('submit' , function(e){
//     // e.preventDefault()
//     // console.log("form is submitting.....")
//     // console.log(e)
// })

form.addEventListener('input' , function(e){
    console.log("form is submitting.....")
    console.log(e)
})

let emptyInput = document.getElementById("empty_input")

emptyInput.setAttribute("type" , "email")
console.log(emptyInput.getAttribute("id"))
emptyInput.toggleAttribute('disabled')


let emptyDiv = document.getElementById("empty-div")

let newDiv = document.createElement("div")
let newP = document.createElement("p")

newP.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus tempora quo itaque numquam
facilis. Reprehenderit beatae asperiores fugit non nostrum. Praesentium placeat incidunt aut recusandae nam
qui sapiente accusantium.`

console.log(newP)

newDiv.appendChild(newP)

console.log(newDiv)

// emptyDiv.appendChild(newDiv)
emptyDiv.prepend(newDiv)
emptyDiv.prepend(newDiv)




