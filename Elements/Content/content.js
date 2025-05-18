import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('./Elements/Content/content.css')       

// static class for storing cards 

export class Content {

    static cards = [] 
    static hovered = false;

    static populateCards (incomingCards) {
        incomingCards.forEach(card => {
            Content.addCard(card)
        });
    }


    static addCard(card) {
        Content.cards.push(card)
    }

    static removeCard(card) {
        const i = Content.cards.indexOf(card)
        if (i == -1) return;

        Content.cards.splice(i,1) 
    }
}