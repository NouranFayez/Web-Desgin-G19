let form = document.getElementById("my-form")
let tasks = []
let tasksContainer = document.querySelector(".tasksContainer")

function addTask(tName , tasktype){
    let task = {
        name : tName ,
        type:  tasktype ,
        status : false
    }
    tasks.push(task)
    // console.table(tasks)

}

function editTask(index){
    tasks[index].status = true
    showTasks()
    console.table(tasks)
}
function removeTask(index){
    tasks.splice(index , 1)
    showTasks()
}

function showTasks(){
    tasksContainer.innerText = ""
    tasks.forEach((item , i , arr)=>{
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.innerText = item.name
        let h3 = document.createElement("h3")
        h3.innerText = item.type
        let completedBtn = document.createElement("button")
        completedBtn.innerText = "completed task"
        let removeBtn = document.createElement("button")
        removeBtn.innerText = "Remove task";
        (item.status == false) ? div.classList.add("alert" , "alert-secondary") : div.classList.add("alert" , "alert-success") 
        completedBtn.classList.add("btn" , "btn-success" , "me-3")
        removeBtn.classList.add("btn" , "btn-danger")
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(completedBtn)
        div.appendChild(removeBtn)
        tasksContainer.appendChild(div)
        completedBtn.addEventListener('click' , function(){
            editTask(i)
        })
        removeBtn.addEventListener('click' , function(){
            removeTask(i)
        })


    })
}




form.addEventListener("submit" , function(e){
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.elements.taskName.value)
    // console.log(e.target.elements.taskType.value)
    addTask(e.target.elements.taskName.value , e.target.elements.taskType.value)
    showTasks()
})

