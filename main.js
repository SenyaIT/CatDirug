import { Cat } from "../Elements/Cat/cat.js";
import { Digur } from "../Elements/Digur/digur.js";
import {Card} from "../Elements/Card/card.js";
import { Content } from "../Elements/Content/content.js";
import { CardsPool } from "../Elements/Content/cardsPool.js";


init(); 

async function populateContentwithCards() {
    try {
      const res = await fetch('../Elements/Cat/cat.json');
      const elems = await res.json();
  
      elems.forEach(elem => {
        const cat = new Cat(elem.name, elem.age, elem.country, elem.picture);
        const card = new Card(cat);
        Content.addCard(card);
      });

    } catch (err) {
      console.error("Failed to load cat data:", err);
    }
  }

async function init() {
    const Doc = document.getElementById("app")
    const digur1 = new Digur("CAT DIGUR", 3, 4)   

    Doc.appendChild(digur1.render());

    await populateContentwithCards(); // wait for cards to be ready
    
    const pool = new CardsPool(Content.cards);

    Doc.appendChild(pool.render());
}

