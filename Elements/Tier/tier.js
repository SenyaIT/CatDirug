import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('./Elements/Tier/tier.css')      

import { Cat } from "../Cat/cat.js";
import { Slot } from "../Slot/slot.js";

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

            //creating an  empty slot
            const slot = new Slot(null)

            //adding cats if there are some
            if (i < this.cats.length){ 
                slot.setActor(this.cats[i]) 
            }

            // adding slot to the Tier
            DivTier.appendChild(slot.render()) 
            
        }

        return(DivTier) 
    
    }
}