import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('./Elements/Content/content.css')       


export class Content {

    static cards = [] 

    static addCard(card) {
        Content.cards.push(card)
    }
    static removeCard(card) {
        const cardPos = this.cards.indexOf(card)
        if (cardPos !== -1) {
            this.cards.splice(cardPos, 1)
        }
    }

    static render() {

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


        Content.cards.forEach(card => {
            content.appendChild(card.render())
        });

        contentBody.appendChild(content)
        return contentBody;
    }

}