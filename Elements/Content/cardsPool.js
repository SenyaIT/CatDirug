import { DragCard } from "../../Globals/dragCard.js";
import { Content } from "./content.js";

export class CardsPool {

    constructor(cards) {
        this.cards = cards
        this.elem = document.createElement("div")
        this.elem.className = "content-body"

        this.content = document.createElement("div"); 

        this.content.addEventListener("mouseenter", this.onHover)
        this.content.addEventListener("mouseleave", this.onUnHover)
    }

    render() {

        // RENDER Content Area title
        const h2 = document.createElement("h2");
        h2.textContent = "Darg and Drop these cats to the Tier List"

        this.elem.appendChild(h2);


        // RENDER Content Area with Pool of Cards
        this.content.className = "content"

        this.cards.forEach(card => {
            this.content.appendChild(card.render())
        });

        this.elem.appendChild(this.content)

        return this.elem
    }

    onHover = (e) => {
       if (!DragCard.currentCard) return
        Content.hovered = true;
        this.content.classList.add("hovered")
    }

    onUnHover = (e) => {
       if (!DragCard.currentCard) return
        Content.hovered = false;
        this.content.classList.remove("hovered")
    }
}