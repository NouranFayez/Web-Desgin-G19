
let arr = ["tamer" , "ahmed" , 36 , "developer" , "Egyptian"]


let firstName = "Mohamed"
let lastName = "Mazen"

let userInfo = {
    firstName : "tamer" ,
    lastName : "Ahmed" ,
    nationality :"Egyptian",
    address : ["nasr city" , "october"],
    isGraduated : true ,
    // fullName : ()=>{
    //     console.log(this)
    //     return this.firstName + " " + this.lastName
    // }
    /// function inside object
    fullName : function(){
        // console.log(this)
        return this.firstName + " " + userInfo.lastName
    }

}

// console.log(userInfo.isGraduated) // get value

userInfo.lastName = "Fayez" // update value

userInfo.birthYear = 1985

// console.log(userInfo.fullName())
// console.log(userInfo)


/// send object to function
let info = (obj)=>{
    console.log(obj)
    console.log(obj.firstName)
    console.log(obj.fullName())
}

info(userInfo)



let bio = ()=>{
    return {
        name: "Mai",
        age : function (){
            return 20
        }
    }
}

console.log(bio().age())
console.log(bio().name)


var user1 ={
    name : "omar" , 
    age: 10
}
var user2 ={
    name : "Tamer" , 
    age: 30
}

let users = [
    {
        name : "omar" , 
        age: 10
    } ,
    {
        name : "Tamer" , 
        age: 30
    }
]

console.log(users)
console.log(users[0].name)

users.forEach((item)=>{
    console.log(item)
})

let index = users.findIndex(item => item.name == "omar")

console.log(index)

console.table(users)




