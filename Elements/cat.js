
import { Person } from "../person.js";

export class Cat {
    constructor(name, age, country, picture) {
      this.name = name;
      this.age = age;
      this.country = country;
      this.picture = picture;
      this.owners = [];
      this.tiStat = 0;
      this.tiRank = 0;
    }

    addOwner (person) {
        if (person instanceof Person) {
            this.owners.push(person);
        } else console.log("Non Person Error");
        
    }

    render (){
        // Div that wraps cat element
        const CatDiv  = document.createElement("div");

        // Cat image
        const catImg = document.createElement("img");
        catImg.src = this.picture;

        // adding cat image into div
        CatDiv.appendChild(catImg);

        // return div with image inside
        return CatDiv;
    }
  }