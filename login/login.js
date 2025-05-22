import { loadCSS } from "../Utils/loadCSS.js";
loadCSS('../login/login.css')    
import '../init.js' 

import { People } from "../Globals/people.js"
import { AuthSelect } from "../Globals/authSelect.js";

// Rendering  a select of peoples names:

const selectContainer = document.getElementById("input-name")
const selectLabel = document.createElement("label")
selectLabel.textContent="User name: "
selectContainer.appendChild(selectLabel) 
AuthSelect.create().then(select=> {
    selectContainer.appendChild(select)
})


/// Login Button :

const Button = document.createElement("button")
Button.id = "login-button"
Button.textContent = "login"
Button.className = "login-button" 
const LoginElem = document.getElementById("login")
LoginElem.appendChild (Button) 

Button.onclick = () => {
    //window.location.href = "/dirug" 
    const inputName = document.getElementById("name")
    const inputPassword = document.getElementById("password")

    if (authPerson.password == "") {
        // if the users password hasn't been set yet
        console.log(authPerson.name + " has to sign up")
        window.location.href = "/signup"  
        return
    }

    console.log("Auth Successful")
}



