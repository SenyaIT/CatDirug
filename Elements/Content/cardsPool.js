export class CardsPool {

    constructor(cards) { 
        this.cards = cards 
        this.elem = document.createElement("div") 
        this.elem.className = "content-body" 
    }

    render () {

        // RENDER Content Area title
        const h2 = document.createElement("h2");
        h2.textContent = "Darg and Drop these cats to the Tier List"

        this.elem.appendChild(h2);


        // RENDER Content Area with Pool of Cards
        const content = document.createElement("div");
        content.className = "content"

        this.cards.forEach(card => {
            content.appendChild(card.render()) 
        });

        this.elem.appendChild(content) 




        return this.elem
    }

}