var formid = document.getElementById('formid')

var x=false

formid.addEventListener('input', function (e) {
    console.log(e.target.id)

    switch (e.target.id) {
        case "userName":

            NameValidation(e.target)
            break;
        case "email":
            emailValidation(e.target)

            break
        case 'password':
            passwordValidation(e.target)

            break
    }
})
function NameValidation(input) {
    var valueOFinput = input.value.trim()
    console.log(valueOFinput.length);
    if(valueOFinput.length < 3)
     { 
         showErrormessage(input, "enter at least 3 character")
         return false;
        
   
   
 
 }
    else{ 
        removeError(input)
        this.x=true
    }
}

function showErrormessage(element, msg) {
    element.nextElementSibling.innerText = msg
    element.nextElementSibling.classList.add('text-danger')

}


function removeError(element) {
    element.nextElementSibling.innerText = ""
}
function emailValidation(input) {


    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var inputValue = input.value

    console.log(emailPattern.test(inputValue))
    if (emailPattern.test(inputValue) == false) showErrormessage(input, "enter a valid Email")
    else removeError(input)

}
function passwordValidation(input) {
    var inputValue = input.value
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (passwordPattern.test(inputValue) == false) showErrormessage(input, "enter at least 1 capital character , 1 small character , 1 letter , 1 special character....")
    else removeError(input)
}

formid.addEventListener('submit' , function(e){
   submitForm()
    
})





function submitForm( ) {

    if (NameValidation(e.target.value)==false) {
        e.preventDefault()
        showErrormessage(input, "please enter true data")
       

    }
    else if (emailValidation(e.target.value) ==false) {
        e.preventDefault()

        showErrormessage(input, " please enter true data")

    }
    else if (passwordValidation(e.target.value)==false) {
        e.preventDefault()

        showErrormessage(input, "please enter true data")
    }
    else{
        showErrormessage(input, "thank you ")
    }
}
