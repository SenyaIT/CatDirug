import { Cat } from "./cat.js";

const doc = document.getElementById("app");

export class Tier{
    constructor(name, color, rank, number) {
        this.name = name;
        this.color = color;
        this.rank = rank;
        this.number = number;
        this.cats = [];
    }

    addCat (cat){
        if (!cat instanceof Cat) return;
        this.cats.push(cat);
    }

    render () {

        // createing a tier 
        const DivTier = document.createElement("div") ;
        DivTier.className = "tier"; 
        DivTier.style.backgroundColor = this.color; 


        //adding a name of the tier : s a ... f
        const TierName = document.createElement("div")
        TierName.className = "tier-name"
        TierName.textContent = this.name;
        DivTier.appendChild(TierName) 

        //rendering slots with cats or empty
        for (let i = 0; i< this.number; i++) { 

            //redering cats if there are some
            if (i < this.cats.length){ 

                console.log("Creating a cat slot in tier.js") 

                const Slot = document.createElement("div");
                Slot.className = "slot"
                Slot.appendChild(this.cats[i].render())

                // adding slot to the Tier
                DivTier.appendChild(Slot)  
            }

            // rendering empty slots
            else {
                console.log("Creating an empty slot in tier.js")  

                const EmptySlot = document.createElement("div");
                EmptySlot.className = "slot"


                // adding slot to the Tier
                DivTier.appendChild(EmptySlot) 
            }
        }

        return(DivTier) 
    
    }
}