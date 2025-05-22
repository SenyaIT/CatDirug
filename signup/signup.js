import { AuthSelect } from "../Globals/authSelect.js";
import { loadCSS } from "../Utils/loadCSS.js";
import '../init.js'
loadCSS('../signup/signup.css')   

/// Select Names:

const selectContainer = document.getElementById("input-name")
const selectLabel = document.createElement("label")
selectLabel.textContent="User name: "
selectContainer.appendChild(selectLabel) 
AuthSelect.create().then(select=> {
    selectContainer.appendChild(select)
}) 


// Sign up button:
const Button = document.createElement("button")
Button.id = "signup-button"
Button.textContent = "sign up"
Button.className = "signup-button" 
const SignupElem = document.getElementById("signup")
SignupElem.appendChild (Button) 

Button.onclick = () => {


}


