import { Person } from "./Elements/Person/person.js"
import { People } from "./Globals/people.js"

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

    const authPerson = CheckLoginData(inputName.value, inputPassword.value) 
    
    if (!authPerson) {
        // if the passwords didnt match:
        console.log(" User Not Found")
        return
    }

    if (authPerson.password == "") {
        // if the users password hasn't been set yet
        console.log(authPerson.name + " has to sign up")
        return
    }

    console.log("Auth Successful")
}



populatePeople() 

async function populatePeople(){

    const nameInput = document.getElementById("name")
    const res = await fetch('../Elements/Person/person.json');
    const elems = await res.json();
    elems.forEach(elem => {
        const person = new Person (elem.name, elem.age, elem.country, elem.picture)
        People.push(person);
        const option = document.createElement("option")
        option.textContent = person.name 
        nameInput.appendChild(option)
    })
};

function CheckLoginData (name, password){
    let authPerson = null;
    People.forEach(person=> {
        if (person.name == name)
            if (person.password == password) authPerson = person 
    })
    return authPerson
}