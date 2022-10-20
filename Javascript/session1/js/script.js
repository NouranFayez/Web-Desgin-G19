
var firstName = "Nouran"

var lastName = "Fayez"

// console.log("Javascript")
// console.log(firstName)

var fullName = firstName + " " + lastName

// console.log(fullName)

var age = 28

// console.log(age)

var num = 10
var num2 = 20
var sum = num + num2
// console.log(sum)

var x = num + num2 + firstName
var x =  num +  firstName
var x = firstName + num + num2

var isGraduated = true
var isGraduated2 = false


var familyName 

var h = null

// console.log(familyName)
// console.log(h)


// prompt("enter your name" , "ahmed")

/*

....
...
*/


// var p = prompt("enter your name")

// console.log(p)

// -- Mathematical Operators(Arthematic) ==> (+ , - , / , * , ** , % , ++ , --)     

// var num = 10
// var num2 = 20
// var num3 = num + num2
// var num3 = num - num2


var k = 10

// console.log(k++)
// console.log(k) // 11
// console.log(++k)

var h = 5

// console.log(h--)
// console.log(h)
// console.log(--h)



var l = 10 / "html"
// console.log(l)


// -- Assignment (Shortcut) Operators ==> (+= , -= , /= , *= , **= , %= )

var n = 4

// n = n + 3
// console.log(n+=3)
// console.log(n-=3)
// console.log(n*=2)


var firstName = "Ahmed"

console.log(typeof(firstName))
console.log(typeof(age))
console.log(typeof isGraduated)

// -- Comparison Operators ==> (> , >= , < , <= , == , === , != , !==) ==> return Boolean

var s = 10
var t = 20
var h = 20

// console.log(s > t)
// console.log(s < t)
// console.log(t > h) // false
// console.log(t >= h) // true

var r = "20"
var k = 20

// console.log(r == k) // value ==> output : true
// console.log(r === k) // value - dataType ==> output : false

// console.log(r != k) // value ==> output : false
// console.log(r !== k) // value - dataType ==> output : true



// -- Logical Operator ==> (&& || !)

var r = "20"
var k = 20

// console.log(r == k && typeof k == "number" && k == 20) // false

// -- && : true , false , true ==> false
// -- && : true , true , true ==> true
// -- && : false , false , false ==> false

// console.log(r == 40 || typeof r == "boolean" ||  k == 20) // true

// || : false , false , true ==> true
// || : true , true , true ==> true
// || : false , false , false ==> false


var h = 20

// console.log( !h == 20)

// console.log(h == 20 && (!typeof h == "number"))

var m = 30

// console.log(!m)

var f = 0

// console.log(!f && typeof f == "number")

var fName = null

var j

// console.log(!j)

// -- ternary Operator ==> (condition/s) ? true code : false Code


var a = 20
var result // undefined

// (a == 20 ) ? result = "correct"  : result = "wrong"
// (a == 20 && typeof a == "string" ) ? result = "correct"  : result = "wrong"
// (a) ? result = "correct"  : result = "wrong"

// var p = prompt("enter your Name");
// (p) ? result = p : result = "enter a valid name"

// console.log(p)
// console.log(result)


// if / else Statment

/*
if(condition/s){
    true Code .....
}
else {
    false code ......
}
*/

var job = prompt("enter your Job")

// if(job == "developer") console.log("he is a developer")
// else console.log("enter a valid Job")

if(job == "developer" && typeof job == "string" ){
  
    
}
else if(job == "doctor"){
    var res = "he is a doctor"
    console.log(res)
}
else if(job == "engineer"){
    var res = "he is a engineer"
    console.log(res)
}
else {
    if(job == "" || job == null) 
    console.log("enter a valid Job")
    else console.log(job)
}





