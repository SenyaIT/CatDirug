import { Cat } from "./Elements/cat.js";

const Doc = document.getElementById("app")

const Cat1 = new Cat("Simon", 9, "Russia", './catPhotos/Simon.jpg')
Doc.appendChild(Cat1.render());   
