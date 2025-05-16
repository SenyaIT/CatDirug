import { Cat } from "./Elements/Cat/cat.js";
import { Digur } from "./Elements/Digur/digur.js";
import { Card } from "./Elements/Card/card.js";
import { Content } from "./Elements/Content/content.js";

const Doc = document.getElementById("app")

const digur1 = new Digur("CAT DIGUR", 3, 4)   

Doc.appendChild(digur1.render());




const Cat1 = new Cat("Simon", 9, "Russia", '/catPhotos/Simon.jpg')
const Cat2 = new Cat("Messi", 3, "Israel", '/catPhotos/Messi.jpg') 


const card1 = new Card(Cat1)
const card2 = new Card(Cat2) 

const content = new Content(2)
content.addCard(card1)
content.addCard(card2)
 
Doc.appendChild(content.render())    
