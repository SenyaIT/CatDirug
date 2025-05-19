
const Button = document.createElement("button")
Button.id = "login-button"
Button.textContent = "login"
Button.className = "login-button" 

Button.onclick = () => {
    window.location.href = "/dirug" 
}
const LoginElem = document.getElementById("login")
LoginElem.appendChild (Button) 

