import { Cat } from "./Elements/cat.js";
import { Tier } from "./Elements/tier.js";
import { Digur } from "./Elements/digur.js"; 
import { Card } from "./Elements/Card.js";

const Doc = document.getElementById("app")

const Cat1 = new Cat("Simon", 9, "Russia", '/catPhotos/Simon.jpg')
// const Tier1 = new Tier("S", "red", 1, 4 ) 
// Tier1.cats.push(Cat1)

const digur1 = new Digur("CAT DIGUR", 5, 4)  

const card = new Card(Cat1)
Doc.appendChild(digur1.render()); 

Doc.appendChild(card.render())   
