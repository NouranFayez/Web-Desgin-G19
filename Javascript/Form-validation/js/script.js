
// let userNameInput = document.getElementById("userName_id")

// userNameInput.addEventListener('change' , function(e){
//     console.log(e)
// })
// userNameInput.addEventListener('input' , function(e){
//     console.log(e)
// })

let form = document.querySelector("#form_id")

function nameValidation(input){
    let inputValue = input.value.trim()
// "     huhgrghfu vgvgvg          "
    if(inputValue.length < 3){
        // input.nextElementSibling.style.display= "block !important"
        // input.nextElementSibling.classList.remove("d-none")
        // input.nextElementSibling.classList.add("d-block")
        console.log("less than 3 character")
        // input.nextElementSibling.innerText = "less than 3 character"
        handleError(input , "name must be at least 3 character")
    }
    else {
        // input.nextElementSibling.classList.add("d-none")
        handleError(input)
  
    }
}

// function showError(element , msg){
//     element.nextElementSibling.innerText = msg
// }
// function removeError(element){
//     element.nextElementSibling.innerText = ""
// }

function handleError(element , msg = ""){
    element.nextElementSibling.innerText = msg
}

// regular expression (email) ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression
function emailValidation(input){
    // nouran@hotmail.com
    // let regExp = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) 
    let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(!regExp.test(input.value)) handleError(input , "invalid email")
    else handleError(input)
    console.log(regExp.test(input.value))
}


// regular Expression (password) ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
function passwordValidation(input){
    // let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    console.log(strongRegex.test(input.value));
    (strongRegex.test(input.value)) ? handleError(input) : handleError(input , "password must be at least 1 lowercase character , 1 uppercase character , 1 number , 1 special character ........")

}


form.addEventListener('input', function (e) {
    // console.log(e)
    switch (e.target.id) {
        case "userName_id": 
            nameValidation(e.target)
            break;
        case "userEmail_id":
            emailValidation(e.target)
            break;
        case "userPassword_id":
            passwordValidation(e.target)
            break;

    }
})



