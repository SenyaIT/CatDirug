export class Card {
    constructor(actor){
         this.actor = actor;
    }

    render (){
        const cardDiv = document.createElement("div");
        cardDiv.className = "card" 

        
        cardDiv.style.backgroundImage =  `url('${this.actor.picture}`;     

        cardDiv.textContent = this.actor.name;
        

        return cardDiv 
    }
}