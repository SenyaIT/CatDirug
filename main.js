import { Cat } from "./Elements/cat.js";
import { Tier } from "./Elements/tier.js";

const Doc = document.getElementById("app")

//const Cat1 = new Cat("Simon", 9, "Russia", './catPhotos/Simon.jpg')
 const Tier1 = new Tier("S", "red", 1, 4 ) 

Doc.appendChild(Tier1.render());   
