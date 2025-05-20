import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('../Elements/Person/person.css')      

export class Person {
    constructor(name, age, country, picture) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.picture = picture; 
        this.password = "";
      }

  setPassword(password){
    this.password = password;
  }

  checkPassword (password) {
    return this.password === password 
  }
}