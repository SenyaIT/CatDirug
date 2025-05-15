import { Cat } from "./cat.js";
import { Card } from "./card.js"

export class Content {
    constructor(number) {
        this.number = number
        this.cards = []
    }
    addCard(card) {
        this.cards.push(card)
    }
    removeCard(card) {
        const cardPos = this.cards.indexOf(card)
        if (cardPos !== -1) {
            this.cards.splice(cardPos, 1)
        }
    }

    render() {

        const contentBody = document.createElement("div")
        contentBody.className = "content-body" 

        const content = document.createElement("div")
        content.className = "content"

        const title1 = document.createElement("h2")
        title1.textContent = "Our cats"

        const title2 = document.createElement("h3")
        title2.textContent = "Drag And Drop these cats to the Tier list"

        contentBody.appendChild(title1) 
        contentBody.appendChild(title2)  


        this.cards.forEach(card => {
            content.appendChild(card.render())
        });

        contentBody.appendChild(content)
        return contentBody;
    }
}