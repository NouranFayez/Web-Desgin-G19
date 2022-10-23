
/*
variable
switch(var) {
    case condition1 : code ...
    case condition2 : code ...
    case condition3 : code ...
    case condition4 : code ...
}

*/


// var job = prompt("enter your Job")

// if(job == "doctor") console.log("doctor")
// else if(job == "developer") console.log("developer")
// else if(job == "eng") console.log("eng")

// var job = prompt("enter your Job")

// switch (job) {
//     case "doctor":
//     case "nurse" :
//         console.log("doctor / nurse")
//         break
//     case "dev":
//         console.log("dev")
//         break
//     case "eng":
//         console.log("eng")
//         break
//     case "20" :
//         console.log("number = 20") 
//         break   
//     default:
//         console.log("invalid Job")
// }


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

/*
start
while(condition){
    code.....


    increment++
}
*/
// var i = 10
// while(i <= 20){
//     console.log(i)

//     i++
// }

/*
for(variable ; condition ; increment++){
    code ...
}

*/

// for(var i = 0 ; i <= 10 ; i++){
//     if(i == 3) continue
//     else if(i == 7) break
//     else console.log(i)
// }


/*
function name(){
    code ....
}
*/


// function sum(){
//     console.log(5 + 10)
//     var n = 5 + 10
//     return n
// }
// var s = sum()

// console.log(s)

// var t = sum() + 100

// console.log(t)

// function sum2(){

//    return  20 + 30
// }

// var h = sum2()
// console.log(h)



function sumNumbers(num1 , num2 , num3 = "50"){
    // console.log(num3)
    return num1 + num2 + num3
}

// console.log(sumNumbers(20 , 30))
// console.log(sumNumbers(100 , 40))
// console.log(sumNumbers(100 , 500))


var x = 200
var f = 1000

// console.log(sumNumbers(x , f , 40000))

// prompt("enter your name")

var k = "html"

function getFullName(){
    var firstName = prompt("enter your First Name");
    var lastName = prompt("enter your last Name");
     FullName = firstName + " " + lastName

    m = "Javascript"
    // console.log(k)

    return FullName
}

// console.log(getFullName())
// console.log(FullName)

// console.log(m)


var firstName = "ahmed"

function sum(){
    // var firstName = "Mohamed"
    let num = 10
    var add = 50
    if(true){
        let num2 = 40
        var add2 = 100000
        // console.log(num)
        // console.log(add)
    }
    let num2 = 5000000
    // console.log(add2)
    // console.log(firstName)
    // console.log(num2)
}

sum()

// console.log(add2)

// const isGraduated = true

// console.log(isGraduated)

// const isGraduated = "mohamed"


// var j = true
// var j = "fghjkl"



//////////////////// function statment 
function getNumber(){
    return 1000
}
let numb = getNumber()

// console.log(numb)
//////////////////// function Expression
let info = function(){
    return "Ahmed"
}
// console.log(info())

////////////////// Arrow Function

let nums = (num)=>{
    return num * num
}

let nums2 = (num)=> num * 10

let num3 = num => num * 2000

// console.log(nums(3))
// console.log(num3(50))


//////////////////////////////////////////////

////////// Arrays

// let firstName = "Tamer"
// let LastName = "Ahmed"
// let isGraduated = true
// let job = "Developer"
// let age = 36

let userInfo = [ "Tamer" , "Ahmed" , true , "developer" , 36]

// console.log(userInfo[3])

var d = userInfo[3] // get item 

userInfo[4] = 30 // update item 


userInfo[5] = "Egyptian"

// console.log(userInfo.length)
userInfo[userInfo.length] = "ghhjkkl"
// console.log(userInfo)

///////////////////// Array Methods

var courses = ["html"  , "css" , "bootstrap" , "js"]

courses.push("Node" , 30)

courses.unshift(0 , "Angular")

courses.pop()
courses.shift()


// console.log(courses.includes("hhhh"))
// console.log(courses.indexOf("hjjh"))

if(courses.indexOf("Php") == -1){
    courses.push("php")
}

/* splice ==> add item/s
              remove item/s
              add / remove item/s
*/

//splice(startIndex , deletedCount , item/s)


// remove item/s
courses.splice(3 , 2)
// add item/s
courses.splice(2 , 0 , true , 30 , null , undefined)

// remove / add item/s
courses.splice(4 , 2 , "Mongo DB")

console.log(courses)

var g = courses.toString()

// console.log(typeof g)
// console.log(g)
// console.log(courses.join("-"))


console.log(courses.reverse())

for(var i = 0 ; i < courses.length ; i++){
    // console.log(courses[i])
}



// courses.forEach(track)


// function track(element , i , arr){
//     console.log(element)
//     console.log(i)
//     console.log(arr)
// }


courses.forEach((item , ind , array)=>{
    // console.log(item)
    // if(ind == 4) console.log("ay 7aga")
})


// courses.forEach(item=>{
//     console.log(item)

// })

// ()=>{

// }

let ids = [30 , 10 , 5, 100 , 45]

let findNum = ids.find(item => item > 200)

let findIndex = ids.findIndex(item => item > 45)

console.log(findNum)
console.log(findIndex)

let filterArray = ids.filter(item => item > 200)

console.log(filterArray)
// ids.find(findItem)



// function findItem(item){
//     return item > 5
// }

let names = ["ahmed" , "mohamed" , "mai" , "nada" , "fares"]

let nameIndex = names.findIndex(item => item == "mai")
console.log(nameIndex) // index

names.splice(nameIndex , 1)

console.log(names)




